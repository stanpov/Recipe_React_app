const express = require('express');
const router = express.Router();
const recepiModel = require('../models/recepiModel');
const uniqid = require('uniqid');



router.get('/all',async(req,res)=>{
    try {
       let result =  await recepiModel.find({})
       return  res.status(200).json(result)
        
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
})

router.post('/create',async(req,res)=>{
     const {title,description,imageUrl} = req.body
    
     let creator = req.user.username
    let errors = [];

    
    try {
        if(title.length < 4) {
            errors.push('Title must be more than 3 simbols');
        }
        if(description.length < 10) {
            errors.push('Description must be more than 9 simbols');
        }
        if(imageUrl.length < 5) {
            errors.push('ImageURL cant be empty string');
        }
        if(errors.length > 0) {
            return res.json({messagge: errors[0]})
        }
         await recepiModel.create({title,description,imageUrl,creator},(err,result)=>{
            if(err) {
                
               return res.status(500).json({messagge:"something wrong"})
            }
              return  res.status(200).json({result,success:'Successffully created!'})
        })
       
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
})

router.post('/like/:id',async(req,res)=>{
    const id = req.params.id
    const userId = req.user._id
    
     try {
         
        let updated = await recepiModel.updateOne({_id: id},{$addToSet : {likes: [userId]}})
        
        if(!updated) {
            return res.status(404).json({messagge:'No items with this id'})
        } else {
            if(updated.nModified === 1) {
                let result = await recepiModel.findById(id)
                return res.status(200).json({result:result,success:"updated successfully"})
            } else if(updated.nModified === 0) {
                let result = await recepiModel.findById(id)
                return res.status(200).json({result:result,success: "already updated."})
            }
            
        }
       
     } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
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
        return  res.json({data:`error`,messagge:error.message});
    }
    
    
})

router.post('/addcomment/:id',async(req,res)=>{
    const id = req.params.id;
    const {comment} = req.body
    const commentId = uniqid()
    try {
        if(comment.length === 0) {
            return res.json({messagge: 'cannot be empty string'})
            
        } else {
            let updated = await recepiModel.updateOne({_id: id},{$push: {comments: [{commentId:commentId,comment:comment}]}})
            
                let resultData = await recepiModel.findById(id)
                return res.status(200).json({result:resultData,success:"Comment added."})
            
            
        }
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
    
    
   
})

router.post('/removecomment/:id',async(req,res)=>{

    try {
        const recepiId=req.params.id;
       
        const idComment = req.body.idComment

    let updated = await recepiModel.updateOne({_id: recepiId},{$pull: {comments: {commentId: `${idComment}` }}},{multi: true})
    let resultData = await recepiModel.findById(recepiId)
    return res.status(200).json({result:resultData,success:'comment deleted'})
        
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }

    
})

router.delete('/deleterecepi/:id',async(req,res)=>{
    try {
        const recepiId = req.params.id;
        await recepiModel.deleteOne({_id: recepiId })
        return res.status(200).json({success:"Successfully deleted."})
    } catch (error) {
        return  res.json({data:`error`,messagge:error.message});
    }
})

router.get('/ranklist',(req,res)=>{
   
    recepiModel.find({}).then(resp=>{
        resp.sort((a,b)=>{
           return (b.likes.length - a.likes.length) || (b.comments.length - a.comments.length)
        })
        return res.status(200).json(resp)
    }).catch(err=>res.status(500).json(err))
    
      
})


module.exports = router