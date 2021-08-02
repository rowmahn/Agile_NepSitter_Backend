const express = require('express');
const router = express.Router();
const Report = require('../models/Report')
const authentication=require('../middlewares/authentication')

router.post('/worker/report/:wid', function(req,res){
    const wid=req.params.wid;
    const title= req.body.title;
    const issue= req.body.issue;
    const data=new Report({
        wid:wid,
        title:title, 
        issue:issue
    })
    data.save()
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
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
router.post('/employer/report/:empid', function(req,res){
    const empid=req.params.empid;
    const title= req.body.title;
    const issue= req.body.issue;
    const data=new Report({
        empid:empid,
        title:title, 
        issue:issue
    })
    data.save()
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
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