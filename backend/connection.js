const mongoose = require('mongoose');


const databaseName ="previewgenerator"
const url=`mongodb+srv://shivani:shivani@cluster0.eyxncbq.mongodb.net/${databaseName}?retryWrites=true&w=majority`

// connect to database
// async function - returns a promise
mongoose.connect(url)
.then((result)=>{
    // console.log(result);
    console.log('connected to database');

}).catch((err)=>{
    console.log(err)
}
);

module.exports = mongoose;

// 1. asynchronous - simultaneously
// 2. synchronous - one by one