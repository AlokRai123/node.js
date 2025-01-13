const mongoose = require("mongoose");

async function connectToMongoDB(url){
    return mongoose.connect(url,"db is connected")
}
module.exports = {connectToMongoDB}