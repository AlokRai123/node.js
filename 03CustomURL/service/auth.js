const jwt = require("jsonwebtoken")
const secret = "Alok123456"

function setuser( user){
    return jwt.sign({
        _id: user.id,
        email: user.email
    },secret);
}
function getUser(token){
    if(!token) return null;

    try{
        return jwt.verify(token,secret);
    }catch (error){
        return null;
    }
}

module.exports = {setuser,getUser}