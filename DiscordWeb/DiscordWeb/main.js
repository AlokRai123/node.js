const express = require("express")

const app = express();

app.get("/" , (req,res) =>{
    console.log("hello world");
    res.end("server is created")
});

app.listen(8000, () =>{
    console.log("server is created")
})