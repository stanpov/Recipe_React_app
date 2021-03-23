const express = require('express');
const router = express.Router();
const recepiModel = require('../models/recepiModel');
const uniqid = require('uniqid');


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
         await recepiModel.create({title,description,imageUrl,creator},(err,result)=>{
            if(err) {
               return res.status(500).json({messagge:"something wrong"})
            }
              return  res.status(200).json(result)
        })
       
    } catch (error) {
        
    }
})

router.post('/like/:id',async(req,res)=>{
    const id = req.params.id
    
     try {
         // Have to fix this likes to recive only user parameters
        let updated = await recepiModel.updateOne({_id: id},{$addToSet : {likes: [id]}})
        
        if(!updated) {
            return res.status(404).json({messagge:'No items with this id'})
        } else {
            if(updated.nModified === 1) {
                let result = await recepiModel.findById(id)
                return res.status(200).json({result:result,messagge:"updated successfully"})
            } else if(updated.nModified === 0) {
                let result = await recepiModel.findById(id)
                return res.status(200).json({result:result,messagge: "already updated."})
            }
            
        }
       
     } catch (error) {
         res.status(500).json({messagge:"Something wrong..."})
     }  
       
        
    
})

router.get('/recepi/:id', (req,res)=>{
    const id = req.params.id
     recepiModel.findById(id).then(resp=>{
        return res.status(200).json({result:resp,messagge:"this is all data"})
    })
    .catch(err=>console.log(err))
})

router.post('/addcomment/:id',async(req,res)=>{
    const id = req.params.id;
    const {comment} = req.body
    const comentId = uniqid()
    
    if(comment.length === 0) {
        return res.status(304).json({messagge: "cannot be empty string"})
    } else {
        let updated = await recepiModel.updateOne({_id: id},{$push: {comments: [{id:comentId,comment:comment}]}})
        
            let resultData = await recepiModel.findById(id)
            return res.status(200).json({result:resultData,messagge: "comment successfully."})
        
        
    }
   
})

module.exports = router