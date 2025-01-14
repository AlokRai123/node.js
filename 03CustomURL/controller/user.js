const User = require('../models/userModels')
const {V4 : uuidv4} = require("../models/userModels");
const {setuser} = require('../service/auth')


async function handleSignUp(req, res){

  const {name, email, password} = req.body;

  await User.create({
    name,
    email,
    password
  });

   return res.render("home");


}

async function handleLogin(req, res){

    const { email, password} = req.body;

     const user = await User.findOne({email,password});
     if(!user)

    return res.render("login" ,{
        error : "Invalid username and password"
    });

    const token = setUser(user);
    res.cookie("uid",token);
  
    return res.redirect("/");



  }

module.exports = {handleSignUp,handleLogin};