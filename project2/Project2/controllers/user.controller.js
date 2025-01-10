const User = require("../models/user.models");

async function handleGetAllUsers (req,res) {
   const allDbUsers = await User.find({});
   return res.json(allDbUsers);
}

async function handleGetUserById(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user Not found"});
    return res.json(user);
}

async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id,{
        lastName : "sharma"})

        return res.json({status: "Success"});
}

async function handleDeleteUserById(req,res) {
     await User.findByIdAndDelete(req.params.id);
     return res.json({status : "Success"});
}

async function CreateUserById(req,res) {
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
}

module.exports = {handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,CreateUserById};