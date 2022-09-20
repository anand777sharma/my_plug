// importing express

const express = require('express');
const userRouter= require('./routers/userRouter')
const subcriberRouter= require('./routers/subscriberRouter')

const cors=require('cors');
// initilizing express

const app =express();


const port=5000;

// middleware -process the request but does not generate request or response
//  this will parse JSON data to javascript
app.use(express.json());
app.use(cors({origin :['http://localhost:3000']}))

// middleware
app.use('/user',userRouter);



// to process request and to generate response - route
// route
app.get('/',(req,res)=>{
res.send('response from express');
});

// route or end point
app.get('/home',(req,res)=>{
    res.send('hello!!');
    });
app.listen(port,()=>{
    console.log('server has started');
});