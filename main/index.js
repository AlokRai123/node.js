const express = require('express');
const http = require("http");

const app = express();

app.get('/', (req,res) =>{
    return res.end("This is a home page");
});

const myServer = http.createServer(app);

myServer.listen(8000,() =>{
    console.log('server is created');
})