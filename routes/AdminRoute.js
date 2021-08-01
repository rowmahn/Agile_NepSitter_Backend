const express=require('express');
const router=express.Router();
const Admin=require('../models/Admin')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
router.post('/admin/reg',function(req,res){
    const username=req.body.username
    const password=req.body.password

    bcryptjs.hash(password,10,function(err,hash){
        const data=new Admin({
            username:username,
            password:hash
        })
        data.save()
        .then(function(data){
            res.status(201).json({success:true,data})

        })
        .catch(function(e){
            
            res.status(500).json({message:e,success:false})
            
        })

    })

})
router.post('/admin',function(req,res){
    Admin.findOne({username:req.body.username})
    .then(function(userData){
        if(userdata===null){
            return res.status(401).json({message:"Authentication fail"})
        }
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