const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const config = require('../config/configuration')
const jwt = require('jsonwebtoken');







router.post('/register',async (req,res)=>{

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
          return res.status(401).json({error: errors.join(',')});
        }
        let hashedPass =  bcrypt.hashSync(password,config.salt);
        password = hashedPass;
       
        let user = await userModel.create({username,password,email})

        const token = jwt.sign({_id:user._id,username:user.username},config.secret)
        res.status(200).json({user,token})

    } catch (error) {
        res.status(500).json({messagge:"something wrong"})
    }
})

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try {
        let user = await  userModel.findOne({username})

      if(!user) {
         return res.status(404).json({messagge:"user doesnt exist"})
      } else {
        let areEqual = await bcrypt.compare(password,user.password)
        if(!areEqual) {
            return res.status(400).json({messagge:"wrong username or password"})
        } else {
            let token = jwt.sign({_id:user._id,username:user.username},config.secret)
            res.status(200).json({result:user,token})
        }
      }
    } catch (error) {
        res.status(500).json({messagge:"something wrong"})
    }
})





module.exports = router
    


