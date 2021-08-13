const express = require('express');
const router = express.Router();
const Work = require('../models/Work')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads');
const Hire=require('../models/Hire')
router.post('/timer/:hr/:hireID',authentication.verifyWorker, function(req,res){
    const WorkerID=req.worker._id;
   
    const Workinghours=req.params.hr
    const hireId=req.params.hireID
    Hire.findById({_id:hireId}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const EmployerID=result.EmployerID._id
      
        const data=new Report({
            hireId:hireId,
            Workinghours:Workinghours, 
            EmployerID:EmployerID,
            WorkerID:WorkerID
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
router.get('/getworkinghour/:hireId',authentication.verifyEmployer,function(req,res){
    const hireId=req.params.hireId;
    const EmployerID=req.employer._id;
    Work.find({hireId:hireId,paid:false})
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
module.exports = router;