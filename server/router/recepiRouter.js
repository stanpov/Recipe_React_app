const express = require('express');
const router = express.Router();
const recepiModel = require('../models/recepiModel');
const uniqid = require('uniqid');


router.get('/all',async(req,res)=>{
    try {
       let result =  await recepiModel.find({})
       return  res.status(200).json(result)
        
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

router.get('/recepi/:id', async(req,res)=>{
    try {
        const id = req.params.id
      let finded =  await recepiModel.findById(id)
      if(!finded) {
          return res.status(404).json({messagge:'No item with this id'})
      } else {
        return res.status(200).json(finded)
      }
     
    } catch (error) {
        return res.status(500).json({messagge: error})
    }
    
    
})

router.post('/addcomment/:id',async(req,res)=>{
    const id = req.params.id;
    const {comment} = req.body
    const commentId = uniqid()
    
    if(comment.length === 0) {
        return res.status(304).json({messagge: "cannot be empty string"})
    } else {
        let updated = await recepiModel.updateOne({_id: id},{$push: {comments: [{commentId:commentId,comment:comment}]}})
        
            let resultData = await recepiModel.findById(id)
            return res.status(200).json({result:resultData,messagge: "comment successfully."})
        
        
    }
   
})

router.post('/removecomment/:id',async(req,res)=>{

    try {
        const recepiId=req.params.id;
       
        const idComment = req.body.idComment

    let updated = await recepiModel.updateOne({_id: recepiId},{$pull: {comments: {commentId: `${idComment}` }}},{multi: true})
    let resultData = await recepiModel.findById(recepiId)
    return res.status(200).json({result:resultData,messagge:'comment deleted'})
        
    } catch (error) {
        console.log(error);
    }

    
})

router.delete('/deleterecepi/:id',async(req,res)=>{
    try {
        const recepiId = req.params.id;
        await recepiModel.deleteOne({_id: recepiId })
        return res.status(200).json({messagge: "deleted successfully"})
    } catch (error) {
        return res.status(500).json({messagge: `${error}`})
    }
})

module.exports = router