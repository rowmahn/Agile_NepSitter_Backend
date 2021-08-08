const express = require('express');
const router = express.Router();
const Report = require('../models/Report')
const Employer=require('../models/Employeer')
const Hire=require('../models/Hire')
const Worker=require('../models/Applyforjob')
const authentication=require('../middlewares/authentication')

router.post('/worker/report/:hid', function(req,res){
    const hireID=req.params.hid;
    const title= req.body.title;
    const issue= req.body.issue;
    Hire.findById({_id:hireID}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const byemployeremail=result.EmployerID.Email
        const toworkeremail=result.WorkerID.Email
        const data=new Report({
            hireID:hireID,
            title:title, 
            issue:issue,
            byemployeremail:byemployeremail,
            toworkeremail:toworkeremail
        })
        data.save()
        .then(function(data){
            res.status(201).json({success:true,data})
    
        })
        .catch(function(err){
           
            res.status(500).json({message:err,success:false})
            
        })

    })
    .catch(function(e){
        res.status(404).json({message:"hireid not found",success:false})
    })
    
})
router.get('/worker/reports',function(req,res,next){

    Report.find().sort('-CreatedAt')
    .then(function(data){
        
        res.status(200).json({data,success:true})
    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
    

})
router.post('/employer/report/:hid', function(req,res){
    console.log(req.body.title)
    const hireID=req.params.hid;
    const title= req.body.title;
    const issue= req.body.issue;
    Hire.findById({_id:hireID}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const toemployeremail=result.EmployerID.Email
        const byworkeremail=result.WorkerID.Email
        const data=new Report({
            hireID:hireID,
            title:title, 
            issue:issue,
            toemployeremail:toemployeremail,
            byworkeremail:byworkeremail
        })
        data.save()
        .then(function(data){
            res.status(201).json({success:true,data})
    
        })
        .catch(function(err){
           
            res.status(500).json({message:err,success:false})
            
        })

    })
    .catch(function(e){
        res.status(404).json({message:"hireid not found",success:false})
    })
    
})
router.get('/employer/reports',function(req,res,next){

    Report.find().sort('-CreatedAt')
    .then(function(data){
        
        res.status(200).json({data,success:true})
    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
    

})
module.exports = router;