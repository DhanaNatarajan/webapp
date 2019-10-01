const express = require('express');
var bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, DELETE, PATCH, OPTIONS");
    next();
});

app.post("/api/post",(req, res, next)=>{
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message:'post success'
    });
});

app.use("/api/post",(req,res,next) =>{
    const posts = [
        {id:'1', text:'India'},{id:'2',text:'china'},{id:'3',text:'japan'},{id:'4',text:'USA'},{id:'5',text:'UK'}
    ];
    res.status(200).json({
        message: 'success',
        posts: posts
    });
});
// app.use((req, res, next) => {
//     console.log('hello form express');
//     next();
// });
// app.use((req, res, next) => {
//     res.send('hello form express');
// });

module.exports = app;