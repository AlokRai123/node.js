const JWT = require('jsonwebtoken');

const secret = "$uperMan@123";

function createTokenForUser(user){
    return payload ={
        id: user.id,
        email: user.email,
        profileImageURL: user.profileImageURL,
    }
}