const config = require('../config/configuration');
const jwt = require('jsonwebtoken');

module.exports =  function(req,res,next) {
    const token = req.cookies[config.auth_cookie]
    
 
    if(!token) {
        return next()
    }
    jwt.verify(token,config.secret,function(err,decoded){
        if(err) {
            return next(err)
        }
        req.user = decoded;
       return next()
        
    })
    
}