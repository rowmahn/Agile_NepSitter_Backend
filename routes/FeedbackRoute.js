const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback')
const Hire=require('../models/Hire')
const Worker = require('../models/Work')

router.post('/worker/feedback/:hid', function(req,res){
    const hireID=req.params.hid;
    const rating= req.body.rating;
    const feedback= req.body.feedback;
    Hire.findById({_id:hireID}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const byemployeremail=result.EmployerID.Email
        const toworkeremail=result.WorkerID.Email
        const data=new Feedback({
            hireID:hireID,
            rating:rating, 
            feedback:feedback,
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

router.get('/worker/rating/:wid',function(req,res,next){
    WorkerID=req.params.wid;

    Feedback.find({WorkerID:WorkerID})
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
    

})