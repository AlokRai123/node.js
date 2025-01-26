const {validateToken} = require('../services/authentication');
function checkForAuthenticationCookie(cookieName){
    return (req,res,next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            next();
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
           
        } catch (err) {
            return next(err);
         }
        next();
    };
}

module.exports = {checkForAuthenticationCookie};