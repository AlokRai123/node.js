const express = require('express');

const app  = express();

app.get('/' , (req,res) => {
    return res.end('this is a home page of the server');
})
app.get('/about',(req,res) =>{
    return res.end('this is a about page of the server');
})


app.listen(8000,()=>{
    console.log('server is created');
})