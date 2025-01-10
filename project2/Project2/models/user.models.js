const mongoose = require('mongoose');

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
