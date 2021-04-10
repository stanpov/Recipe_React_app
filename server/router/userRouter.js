const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const config = require('../config/configuration')
const jwt = require('jsonwebtoken');








router.post('/register',async (req,res,next)=>{

    let {username,password,email,rePassword} = req.body;
    try {
       
        let errors = [];
        if(email.length == 0 || email.length < 6) {
            errors.push('Email must be more than 5 simbols');
        }
        if(username.length === 0 || username.length < 6) {
            errors.push('Username must be more than 5 simbols');
        }
        if(password.length === 0 || password.length < 6) {
            errors.push('Password must be more than 5 simbols');

        }
        if(password !== rePassword) {
            errors.push('Password shoud be equal to confirm password')
        }
        if(errors.length > 0) {
         return res.json({messagge: errors[0]})
        }
        let hashedPass =  bcrypt.hashSync(password,config.salt);
        password = hashedPass;
       
        let user = await userModel.create({username,password,email})

        const token = jwt.sign({_id:user._id,username:user.username},config.secret)
        res.status(200).json({user,token,success:'Successfully created.'})

    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
})

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try {
        let user = await  userModel.findOne({username})

      if(!user) {
        return res.json({messagge: "user doesnt exist"})
      } else {
        let areEqual = await bcrypt.compare(password,user.password)
        if(!areEqual) {
            return res.json({messagge: "wrong username or password"})
             
        } else {
            let token = jwt.sign({_id:user._id,username:user.username},config.secret)
             res.cookie(config.auth_cookie,token)
            res.status(200).json({result:user,token,success:'Successfully logged in.'});
            
        }
      }
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
})

router.post('/logout',async(req,res,next)=>{
    try {
        await  res.clearCookie(config.auth_cookie);
        return res.status(200).json({success:"User successfull logged out."})
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
    
    
})

router.post('/verify',async(req,res,next)=>{
   try {
    const token = req.cookies[config.auth_cookie]
    
 
    if(!token) {
        return next()
    }
    jwt.verify(token,config.secret,function(err,decoded){
        if(err) {
            return next(err)
        }
       res.status(200).json({result:decoded})
        
    })
   } catch (error) {
    return  res.json({data:`error`,messagge:error.message});
   }

})





module.exports = router
    


