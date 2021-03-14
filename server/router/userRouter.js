const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const config = require('../config/configuration')

router.post('/register',async (req,res)=>{

    try {
        let {username,password,email,rePassword} = req.body;
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
        res.send(`user have been created - this is your details ${user}`)

    } catch (error) {
        console.log(error)
    }
})


module.exports= router