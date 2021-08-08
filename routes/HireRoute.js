const express = require('express');
const router = express.Router();
const Hire = require('../models/Hire')
const {check,validationResult}=require('express-validator')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads');

router.post('/hireworker/:wid',authentication.verifyEmployer,function(req,res){
    console.log(req.body)
    const WorkerID=req.params.wid;
    const EmployerID=req.employer._id;
    const Location=req.body.Location;
    const Time = req.body.Time
    const Date=req.body.Date
    const Day =req.body.Day;
    // const Shift=req.body.Shift;
    const Hours=req.body.Hours;
    const Package=req.body.Package;
    const data=new Hire({
        WorkerID:WorkerID,
        EmployerID:EmployerID,
        Date:Date,
        Location:Location,
        Time:Time,
        Day:Day,
        // Shift:Shift,
        Hours:Hours,
        Package:Package
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
router.get('/getmybooking',authentication.verifyEmployer,function(req,res){
    const EmployerID=req.employer._id
    Hire.find({EmployerID:EmployerID}).populate('WorkerID')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        
        res.status(500).json({message:e,success:false})
        
    })
})


router.get('/worker/getmybooking',authentication.verifyWorker,function(req,res){
    const WorkerID=req.worker._id
    Hire.find({WorkerID:WorkerID}).populate('EmployerID')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/getsinglebooking/:id',function(req,res){
    
    Hire.findById({_id:req.params.id})
    .then(function(booking){
        res.status(201).json({success:true,booking})
        

    })
    .catch(function(e){
        
        res.status(500).json({message:e,success:false})
        
    })
})
router.put('/updatebooking/:id',authentication.verifyEmployer,function(req,res){
  const EmployerID=req.employer._id  
  const id=req.params.id
  const Location=req.body.Location
  const Date=req.body.Date
  const Day =req.body.Day
  const Shift=req.body.Shift
  const Hours=req.body.Hours
  const Package=req.body.Package
    
        Hire.findByIdAndUpdate({_id:id},{
            Location:Location,
            Day:Day,
            Shift:Shift,
            Hours:Hours,
            Package:Package,
           Date:Date
        })
        .then(function(data){
            res.status(201).json({success:true,data})
    
        })
        .catch(function(e){
            
            res.status(500).json({message:e,success:false})
            
        })
    
})
router.delete('/cancelbooking/:id',authentication.verifyEmployer,function(req,res){
    const id=req.params.id
    console.log(req.params)
   
        Hire.deleteOne({_id:id})
        .then(function(data){
            res.status(201).json({success:true,data})
    
        })
        .catch(function(e){
            
            res.status(500).json({message:e,success:false})
            
        })
    
})



module.exports = router;