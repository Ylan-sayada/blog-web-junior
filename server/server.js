let utils = require('./src/utils');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const env = require('./src/modules/EnvConfig.js');
const dbCon = require('./src/modules/db_con');
const multer  = require('multer');
const requestIp = require('request-ip');

env.start();

//init upload storage
let  storage = multer.diskStorage({
  //multers disk storage settings
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: (req, file, cb) => {
    
    cb(null, file.originalname)
  }
});

let upload = multer({
  storage: storage
})

//middlewares
app.use('/public',express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(requestIp.mw())





//POST requests
app.post("/api/comments",(req,res)=>{
  let db = new dbCon(env.getDb(),"comments");
   db.addContent(req.body);
   db.incComments(req.body.articleID);
  res.send(true);
  
});

app.post("/api/article",upload.single('image'),(req,res)=>{
  let db = new dbCon(env.getDb(),"articles");
  let data = JSON.parse(req.body.document);
  db.addContent(data);
  res.send(true);
});

//PUT requests 
app.put("/api/socialInteraction/:id/:userId",async(req,res)=>{
   let {userId} = req.params;
   let db = new dbCon(env.getDb(),"articles");
 })



//GET requests 

app.get("/api/comments/:id", async (req, res) => {
  let {id} = req.params;
  let db = new dbCon(env.getDb(),"comments");
  let commentsList =  await db.getComments(id);
  res.send(commentsList);
  });


  app.get("/api/comments/:id/:start/:amountComments", async (req, res) => {
    let {id,start,amountComments} = req.params;
    let db = new dbCon(env.getDb(),"comments");
        if(start === "0")
          Promise.all([db.getSumOfComments(id),db.getCommentsWithLimit(id,parseInt(start),parseInt(amountComments))])
          .then(values => res.send(values));
        else{
          res.send( await db.getCommentsWithLimit(id,parseInt(start),parseInt(amountComments)));
        }
    });

    app.get("/api/article/:id", async (req, res) => {
      let response = false;
      let {id} = req.params;
      let db = new dbCon(env.getDb(),"articles");
      try{
        let result =  await db.getArticle(id);
        if(result.length > 0){
      result[0].likeSum = result[0].listOfLike.length;
      delete result[0].listOfLike;
      response = {...result[0],img:`http://localhost:3001/public/uploads/${result[0].img}`};
        }
      }catch(err){
        console.log(err)
      }
      res.send(response);
    }
      );

    app.get("/api/articles/:start/:amountArticles/:orderBy", async (req, res) => {
      let {start,amountArticles,orderBy} = req.params;
      let db = new dbCon(env.getDb(),"articles");
      new Promise((resolve,reject)=>{
          if(start === "0"){
            Promise.all([db.getSumOfArticles(),db.getArticlesPreviewWithLimit(orderBy,parseInt(start),parseInt(amountArticles))])
            .then(values => {
              resolve(values)
            })
            .catch(err => reject(err));
          }
          else{
            try{
              resolve(db.getArticlesPreviewWithLimit(orderBy,parseInt(start),parseInt(amountArticles)));
            }
            catch(err){
              reject(err)
            }
          }
        }).then(response => {
          let arrToModified = start === "0" ? response[response.length - 1] : response;
          let modifiedData = arrToModified.map(data =>{
            let res = {
              ...data,
              likeSum:data.listOfLike.length,
              img:`http://localhost:3001/public/uploads/${data.img}`
            }
            delete res.listOfLike;
            return res
          })
          res.send(start === "0" ? [response[0],modifiedData] : modifiedData)
        })
        .catch(err => {
          console.log(err);
        })
      });




      // app.get('/*', (req, res) => {
      //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
      // });

app.listen(env.getPort());