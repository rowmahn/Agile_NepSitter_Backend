const express = require('express');
const router = express.Router();
const Worker = require('../models/Applyforjob')

router.post('/applyforjob',function(req, res){
  // console.log("gggh")
   const fname = req.body.fname;
   const lname = req.body.lname;
   const bdate = req.body.bdate;
   const phone = req.body.phone;
   const email = req.body.email;
   const password = req.body.password;
   const address = req.body.address;
   const city = req.body.city;
   const district = req.body.district;

   const yourself = req.body.yourself;
   const certificate = req.body.certificate;
   const gender = req.body.gender;
   const province = req.body.province;
   const study = req.body.study;
   const status = req.body.status;
   const smoke = req.body.smoke;
   const drink = req.body.drink;
   const jobcategory = req.body.jobcategory;

   const availabilityMorning = req.body.availabilityMorning;
   const availabilityEvening = req.body.availabilityEvening;
   const availabilityAfternoon = req.body.availabilityAfternoon;
   const availabilityNight = req.body.availabilityNight;


    const worker = new Worker({
    fname:fname, lname:lname, bdate:bdate, phone:phone,
    email:email, password:password, address:address, city:city, district:district,
    yourself:yourself, certificate:certificate, gender:gender, province:province,
    study:study, status:status, smoke:smoke, drink:drink, jobcategory:jobcategory,
    availabilityMorning:availabilityMorning
    // , availabilityEvening:availabilityEvening,
    // availabilityAfternoon:availabilityAfternoon, availabilityNight:availabilityNight
});
    worker.save()
    .then(function(result){
      res.status(201).json({message: "Form submited we will review it soon!!", success:true })
    })
    .catch(function(e){

      console.log(e)
      res.status(500).json({message:e, success:false})
    })
})
module.exports = router;