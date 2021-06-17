const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const env = require('./src/modules/EnvConfig.js');
const dbCon = require('./src/modules/db_con');
const multer  = require('multer')

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
app.use(express.json());

app.post("/api/comments",(req,res)=>{
  let db = new dbCon(env.getDb(),"comments");
  let isSuccesfullyAdded = db.addComments(req.body);
  if(isSuccesfullyAdded)
  res.send(true);
});

app.post("/api/article",upload.single('image'),(req,res)=>{
  let db = new dbCon(env.getDb(),"articles");
  let isSuccesfullyAdded = db.addComments(JSON.parse(req.body.document));
  isSuccesfullyAdded&&res.send(true)

});

//get all comments
app.get("/api/comments/:id", async (req, res) => {
  let {collection,id} = req.params;
  let db = new dbCon(env.getDb(),collection);
  let commentsList =  await db.getComments(id);
  res.send(commentsList);
  });

//get only part of comments
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
      let {id} = req.params;
      console.log(req.ip)
      let db = new dbCon(env.getDb(),"articles");
      let result =  await db.getArticle(id);
 
      res.send({...result[0],img:`http://localhost:3001/public/uploads/${result[0].img}`})
    }
      );

    app.get("/api/articles/:start/:amountArticles/:orderBy", async (req, res) => {
      let {start,amountArticles,orderBy} = req.params;
      let db = new dbCon(env.getDb(),"articles");
      new Promise((resolve,reject)=>{
          if(start === "0"){
            Promise.all([db.getSumOfArticles(),db.getArticlesWithLimit(orderBy,parseInt(start),parseInt(amountArticles))])
            .then(values => {
              resolve(values)
            })
            .catch(err => reject(err));
          }
          else{
            try{
              resolve(db.getArticlesWithLimit(orderBy,parseInt(start),parseInt(amountArticles)));
            }
            catch(err){
              reject(err)
            }
          }
        }).then(response => {
          let arrToModified = start === "0" ? response[response.length - 1] : response;
          let modifiedData = arrToModified.map(data =>{
            return {
              ...data,
              img:`http://localhost:3001/public/uploads/${data.img}`
            }
          })
          res.send(start === "0" ? [response[0],modifiedData] : modifiedData)
        })
        .catch(err => {
          console.log(err);
        })
      });

app.listen(env.getPort());