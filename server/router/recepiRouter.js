const express = require('express');
const router = express.Router();
const recepiModel = require('../models/recepiModel')

router.get('/all',async(req,res)=>{
    try {
         recepiModel.find({},(err,result)=>{
            if(err) {
                return res.status(400).json('something wrong no data to show')
            } 
                 res.send(result)
        })
    } catch (error) {
        constole.log(error)
    }
})

router.post('/create',async(req,res)=>{
     const {title,description,imageUrl} = req.body
    
     let creator = "Yavor"

    
    try {
        let newRecepi = await recepiModel.create({title,description,imageUrl,creator},(err,result)=>{
            if(err) {
                res.status(500).json({messagge:"something wrong"})
            }
            res.status(200).json(result)
        })
       
    } catch (error) {
        
    }
})

module.exports = router