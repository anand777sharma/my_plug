const {model,Schema}=require('../connection');

const mySchema=new Schema({
    name : String,
    email : String,
    owner : ObjectID,
  createdAt:Date
})

module.exports=model ('SubscriberCollection',mySchema);