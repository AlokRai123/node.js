const {getUser} = require('../service/auth')

function checkForAuthentication(req,res,next){
    const authorizationHeadervalue = req.headers["authorization"];
    req.user = null;

    if(!authorizationHeadervalue || !authorizationHeadervalue.startsWith("Bearer"))
        return next();

    const token = authorizationHeadervalue.split("Bearer")[1];
    const user = getUser(token);

    req.user = user;
    return next();
}

function restrictTo(roles){
    return function (req,res,next){
        if(!req.user) return res.redirect("/login");

        if(!roles.includes(req.user.role)) return res.end("UnAuthorized");

        return next();
    }
}

// async function restrictToLoggedinUserOnly(req,res,next){
    //     const userUid = req.headers["Authorization"];
    //     console.log(req.headers);
    // // const userUid = req.cookieS?.uid;
    
    //  if(!userUid) return res.redirect("login");
    //  const token = userUid.split("Bearer")[1];
    //  const user= getUser(token);
    // // const user = getUser(userUid);
    
    // if(!user) return res.redirect("/login");
    
    // req.user = user;
    // next();
    // }
    
    module.exports = {checkForAuthentication,restrictTo};