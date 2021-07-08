const express = require('express');
const router = express.Router();
const Worker = require('../Model/Applyforjob')

router.post('/Worker_insert',function(req, res){
   const Fullname = req.body.Fullname;
   const BirthDate = req.body.BirthDate;
   const Gender = req.body.Gender;
   const PhoneNo = req.body.PhoneNo;
   const Address = req.body.Address;
   const JobCategory = req.body.JobCategory;
   const Availability = req.body.Availability;
   const Email = req.body.Email;
   const Password = req.body.Password;
   const ProfilePic = req.body.Profilepic;
    const worker = new Worker({Fullname:Fullname, BirthDate:BirthDate, Gender:Gender, PhoneNo:PhoneNo,
    Address:Address, JobCategory:JobCategory, Availability:Availability, Email:Email, Password:Password,
    ProfilePic:ProfilePic});
    worker.save()
    .then(function(result){
      res.status(201).json({message: "Form submited we will review it soon!!", success:true })
    })
    .catch(function(e){
      res.status(500).json({message:e, success:false})
    })
})
module.exports = router;