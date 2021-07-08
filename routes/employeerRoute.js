const express=require('express');
const router=express.Router();
const Employeer=require('../models/Employeer')
const {check,validationResult}=require('express-validator')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads')

router.post('/user/login',function(req,res){
    Employeer.findOne({Email:req.body.Email})
    .then(function(userData){
        if(userData===null){
           return res.status(401).json({message:"Authentication fail"})
        }
        // else if(userData.Approved===false)
        // {
        //     return res.status(403).json({message:"unApproved user"})
        // }
        bcryptjs.compare(req.body.Password,userData.Password,function(err,cresult){
            if(cresult===false){
              return  res.status(401).json({message:" unAuthorized user"})
            }
           const token= jwt.sign({uid:userData._id},'secretkey');
           res.status(200).json({success:true,token:token,message:"login Successful", userData})
        })
    })
    .catch(function(err){
        res.status(403).json({message:err})
    })
})

module.exports=router