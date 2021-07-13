const express = require('express');
const router = express.Router();
const Hire = require('../models/Hire')
const {check,validationResult}=require('express-validator')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads')
router.post('/hireworker/:wid',authentication.verifyEmployer,function(req,res){
    const WorkerID=req.params.wid;
    const EmployerID=req.employer._id;
    const Location=req.body.Location;
    const Day =req.body.Day;
    const Shift=req.body.Shift;
    const Hours=req.body.Hours;
    const data=new Hire({
        WorkerID:WorkerID,
        EmployerID:EmployerID,
        Location:Location,
        Day:Day,
        Shift:Shift,
        Hours:Hours
    })
            data.save()
            .then(function(data){
                res.status(201).json({success:true,data})

            })
            .catch(function(e){
                
                res.status(500).json({message:e,success:false})
                
            })
})
module.exports = router;