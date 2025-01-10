const express = require("express");
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const mongoose = require('mongoose');
const { type } = require("os");
const PORT = 7000;

const app = express();


// this is a our middleware-----
app.use(express.urlencoded({extended : false}));

app.use((req,res,next) =>{
    console.log("hello from middleware 1");
    next();
})
app.use((req,res,next) => {
   fs.appendFile("text.txt",`${Date.now()} :${req.method}  ${req.path}\n`,
   (err,data) =>
    {next();

   })
})



const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    Job_title :{
        type : String,
    },

    Gender : {
        type : String,
    }
})

const user = mongoose.model("user" , userSchema);
 
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log("MongoDb Connected"))
// .catch((err) => console.log("MongoDb Error" ,err));

app.get('/', (req,res) =>{
    return res.end("this is a home page of server")
})

app.get("/api/users" , (req,res) => {
    return res.json(users);
})



app.get("/api/users/:id" , (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post("/api/users",async (req,res) =>{


     if(!user || !firstName || !email || ! Gender){
        return res.status(400).json({msg : "All field are required"});
     }

     const result = await user.create({
          firstName :body.firstName,
          lastName : body.lastName,
          email : body.email,
          gender : body.gender,
          Job_title : body.Job_title,
     })
     return res.status(201).json({msg : "success"});
})

app.listen(PORT , () =>{
    console.log('server is create')
})
