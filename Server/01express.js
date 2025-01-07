const http = require('http');
const express = require('express');


const app =  express();


app.get('/' , (req,res) => {
    return res.end('this is a home page of the sever');
})

// app.get('/about' , (req,res) =>{
//     return res.end('this is a about page of the server');
// })


// when we create request panel
app.get('/about' , (req,res) =>{
    return res.end('this is a about page of the server' + " hey "+ req.query.name+" you are " + req.query.age );
})


const myServer = http.createServer(app);

myServer.listen(8000, () =>{
    console.log('server is created');
})


