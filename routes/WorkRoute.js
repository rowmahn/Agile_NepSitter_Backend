const express = require('express');
const router = express.Router();
const Work = require('../models/Work')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads');
const Hire=require('../models/Hire');
router.post('/timer/:hr/:hireID', function(req,res){
    
   console.log(req.params.hr)
    const Workinghours=req.params.hr
    const hireId=req.params.hireID
    console.log(hireId)
    console.log(Workinghours)
    Hire.findById({_id:hireId}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const EmployerID=result.EmployerID._id
        const WorkerID=result.WorkerID._id
        const data=new Work({
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
        console.log(result)

    })
    .catch(function(e){
        res.status(404).json({message:"hireid not found",success:false})
    })
})
router.get('/getworkinghour/:hid',authentication.verifyEmployer,function(req,res){
    const hireId=req.params.hid;
    
    Work.find({hireId:hireId,paid:false}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/getworkinghistory/:hid',function(req,res){
    const hireId=req.params.hid;
    Work.find({hireId:hireId}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/works/paid/:hireId',function(req,res){
    const hireId=req.params.hireId
    Work.find({hireId:hireId,paid:true}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.put('/payment/:id',function(req,res){
    const id=req.params.id
    Work.findByIdAndUpdate({_id:id},{paid:true})
    .then(function(data){
        res.status(203).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})

  router.get('/getbywork/single/:id',function(req,res){
      Work.findById({_id:req.params.id}).populate('EmployerID')
      .populate('WorkerID')
      .then(data=>{
          res.status(200).json({success:true,data})
      })
      .catch(err=>{
          res.status(402).json({success:false,err})
      })

  })
module.exports = router;