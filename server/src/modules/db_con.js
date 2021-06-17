let { MongoClient } = require('mongodb');


 class db {
   constructor(db,collection){
     this.collection = collection;
     this.db = db;
     this.client = new MongoClient(`mongodb://localhost:27017/${db}`, {useUnifiedTopology: true});
     this.client.connect((err) => {
       if(err) throw err
      });
   }
   
  addComments = async (data) => {
    this.client.db(this.db).collection(this.collection).insertOne(data,(err,res)=>{
      if(err) throw err;
         return true;
    });
  }
    
  getComments = async(id) =>{
    return await new Promise((resolve,reject)=>{
          this.client.db(this.db).collection(this.collection).find({'articleID':`${id}`}).sort({'date':-1}).toArray((err, result) => {
            if (err) 
            reject(err)
            else
            resolve(result);
          });
    });
  }
  getSumOfComments = async(id) => {
    return await new Promise((resolve,reject)=>{
      this.client.db(this.db).collection(this.collection).find({'articleID':`${id}`}).count((err, result) => {
        if (err) 
        reject(err)
        else
        resolve(result);
      });
    });
  }
  getCommentsWithLimit = async(id,start,amount) => {
    
    return await new Promise((resolve,reject)=>{
      this.client.db(this.db).collection(this.collection).find({'articleID':id}).sort({'date':1}).limit(amount).skip(start).toArray((err, result) => {
        if (err) 
        reject(err)
        else
        resolve(result);
      });
    });
  }

  getSumOfArticles = async() => {
    return await new Promise((resolve,reject)=>{
      this.client.db(this.db).collection(this.collection).find({}).count((err, result) => {
        if (err) 
        reject(err)
        else
        resolve(result);
      });
    });
  }
  getArticle = async(id) =>{
    return await new Promise((resolve,reject)=>{
      let ObjectID = require('mongodb').ObjectID; 
      this.client.db(this.db).collection(this.collection).find({ _id : new ObjectID(id) }).toArray((err, result) => {
            if (err) 
            reject(err)
            else
            resolve(result);
          });
    });
  }
 getArticlesWithLimit = async(orderBy,start,amount) =>{
   let sortByMethod = ((orderBy)=>{
     switch(orderBy){
       case "date-reverse":
        return {'publishDate': -1}
        case "viewNum":
        return {'viewNum': 1}
        default:
        return {'publishDate': 1}
     }
     
   })(orderBy);

  return await new Promise((resolve,reject)=>{
    this.client.db(this.db).collection(this.collection).find({}).project({ content: 0}).sort(sortByMethod).limit(amount).skip(start).toArray((err, result) => {
      if (err) 
      reject(err)
      else
      resolve(result);
    });
  });
 }

}
module.exports = db;
 