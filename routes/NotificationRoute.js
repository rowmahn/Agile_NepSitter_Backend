const express=require('express')
const router=express.Router()
const Employer=require('../models/Employeer')
const Hire=require('../models/Hire')
const Worker=require('../models/Applyforjob')
const Notification=require('../models/Notification')
const authentication=require('../middlewares/authentication')

router.post('/savenotification/:hid',
authentication.verifyEmployer,
function(req,res){
    const hireID=req.params.hid
    const EmpID=req.employer._id
    
     Hire.findById({_id:hireID}).populate('EmployerID').populate('WorkerID')
     .then(function(result){
         const title="Hire"
         const EmployerID=result.EmployerID._id
         const WorkerID=result.WorkerID._id
         const message=result.EmployerID.Fullname +" "+"hires you"
            
         const data=new Notification({
            hireID:hireID,
                        title:title,
                        message:message,
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
        res.status(404).json({message:"cannot found hire"})
    })
    
})
module.exports=router