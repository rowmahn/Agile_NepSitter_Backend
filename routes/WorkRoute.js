const express = require('express');
const router = express.Router();
const Work = require('../models/Work')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads');
router.post('/timer/:hr',authentication.verifyWorker, function(req,res){
    const WorkerID=req.worker._id;
   // const EmployerID=req.params.EmpID;
    const Workinghours=req.params.hr
    const data=new Work({
        WorkerID:WorkerID,
        //EmployerID:EmployerID,
        Workinghours:Workinghours 
    })
    data.save()
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        // console.log(e)
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/getworkinghour/:wid',authentication.verifyEmployer,function(req,res){
    const WorkerID=req.params.wid;
    const EmployerID=req.employer._id;
    Work.find({WorkerID:WorkerID,EmployerID:EmployerID})
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        // console.log(e)
        res.status(500).json({message:e,success:false})
        
    })
})
module.exports = router;