const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback')
const Hire=require('../models/Hire')
const Worker = require('../models/Work')
const authentication=require('../middlewares/authentication')

router.post('/worker/feedback/:id',authentication.verifyEmployer,function(req,res){
    // const hireID=req.params.hid;
    const rating= req.body.rating;
    const feedback= req.body.feedback;
    const WorkerID=req.params.id
    const EmployerID=req.employer._id
    const data=new Feedback({
        rating:rating,
        feedback:feedback,
        WorkerID:WorkerID,
        EmployerID:EmployerID
    })
    data.save()
    .then((Data)=>{
        res.status(201).json({message:"created",success:true,Data})
    })
    .catch((err)=>{
        res.status(401).json({success:false,err})
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
module.exports = router;