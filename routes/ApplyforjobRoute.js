const express = require('express');
const router = express.Router();
const Worker = require('../models/Applyforjob')
const {check,validationResult}=require('express-validator')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')

const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads')

router.post('/applyforjob',
async function(req, res){

  const errors = validationResult(req);
  const worker = await Worker.findOne({ email: req.body.email });
  if (worker != null) {
      return res.status(422).json({
          success: false,
          errors: [
              {
                  msg: 'Email already Exists'
              }
          ],
      })
  }
  if(errors.isEmpty()){
  console.log(req.body)
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
   const experience = req.body.experience;
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

   bcryptjs.hash(password,10,function(err,hash){
    const worker = new Worker({
    fname:fname, lname:lname, bdate:bdate, phone:phone,
    email:email, password:hash, address:address, city:city, district:district,
    yourself:yourself, experience:experience, gender:gender, province:province,
    study:study, status:status, smoke:smoke, drink:drink, jobcategory:jobcategory,
    availabilityMorning:availabilityMorning
    , availabilityEvening:availabilityEvening,
    availabilityAfternoon:availabilityAfternoon, availabilityNight:availabilityNight
});
    worker.save()
    .then(function(result){
      res.status(201).json({message: "Worker Registered Sucessfully", success:true, data:result })
    })
    .catch(function(e){

      console.log(e)
      res.status(500).json({message:e, success:false})
    })

  })
}
  else{
    res.status(422).json({
        success: false,
        errors: errors.errors,
    })
}
})

router.post('/Worker/login',function(req,res){
  Worker.findOne({email:req.body.email})
  .then(function(data){
    if(data===null){
      return res.status(401).json({message:"Authentication fail"})
   }
    const approved=data.approved
    if(approved===true){
      bcryptjs.compare(req.body.password,data.password,function(err,cresult){
        if(cresult===false){
          return  res.status(401).json({message:" UnAuthorized user"})
        }
       const token= jwt.sign({wid:data._id},'secretkey');
       res.status(200).json({success:true,token:token,message:"login Successful", data})
    })
    }
    else{
      res.status(404).json({message:"Worker Not Approved Yet",success:false})
    }
      
     
      
  })
  .catch(function(err){
      res.status(403).json({message:err})
  })
})

router.get('/showworkers/all',

function(req,res){
    Worker.find().select("-password").sort('-createdAT')
    .then(function(data){
        
        res.status(200).json({data,success:true})
    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
})

router.get('/showworker/details/:id',
function(req,res){
  console.log(req.params.id)
  Worker.findById({_id:req.params.id}).select("-password").sort('-createdAT')
  .then(function(data){
      
      res.status(200).json({data,success:true})
  })
  .catch(function(e){
    console.log(e)
      res.status(400).json({message:e,success:false})
  })
})
router.get('/unapproved',function(req,res){
  Worker.find({approved:false}).sort('-createdAt').select('-password')
      .then(function(data){
          
        res.status(200).json({data,success:true})
    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
})

router.get('/approved',function(req,res){
  Worker.find({approved:true}).sort('-createdAt').select('-password')
      .then(function(data){
          
        res.status(200).json({data,success:true})
    })
    .catch(function(e){
        res.status(400).json({message:e,success:false})
    })
})
router.put('/approveworker/:id',function(req,res){
  Worker.findByIdAndUpdate({_id:req.params.id},{approved:true})
  .then(function(data){
          
    res.status(203).json({data,success:true})
})
.catch(function(e){
    res.status(400).json({message:e,success:false})
})
})
router.get('/search/:query',function(req,res){
   
  let searchpattern=new RegExp("^"+req.params.query)
  Worker.find({fname:{$regex:searchpattern}})
  .then(data=>{
      res.status(200).json({data})
  })
  .catch(err=>{
      res.status(400).json({message:"not found details"})
  })
})

router.get('/searchlocation/:query',function(req,res){
   
  let searchpattern=new RegExp("^"+req.params.query)
  Worker.find({address:{$regex:searchpattern}})
  .then(data=>{
      res.status(200).json({data})
  })
  .catch(err=>{
      res.status(400).json({message:"not found details"})
  })
})
router.get('/worker/:location',function(req,res){
   
 const address=req.params.location
  Worker.find({address:address})
  .then(data=>{
      res.status(200).json({data})
  })
  .catch(err=>{
      res.status(400).json({message:"not found details"})
  })
})

router.delete('/denyworker/:id',function(req,res){
  Worker.deleteOne({_id:req.params.id})
  .then(data=>{
    res.status(200).json({data})
    })
    .catch(err=>{
        res.status(400).json({message:"not found details"})
    })
})

router.put('/worker/upprofilepic',authentication.verifyWorker, upload.single('image'), function(req,res){
  if(req.file==undefined){
    return res.status(400).json({message:"invalid image Type!!"})
  }
  const image=req.file.filename
  Worker.findByIdAndUpdate({_id:req.worker._id},{image:image})
    .then((data)=>{
        res.status(203).json({data,success:true})
    })
    .catch((error)=>{
        res.status(404).json({error,success:false})
    })
})


router.get('/getworker/profile',authentication.verifyWorker,(req,res)=>{
  console.log(req.worker._id)
  Worker.findOne({_id:req.worker._id})
  .then(data=>{
    res.status(200).json({data,success:true})
  })
  .catch((error)=>{
      res.status(404).json({error,success:false})
  })
 
})
router.get('/getrecomendation/:service', (req,res)=>{
  Worker.find({jobcategory:req.params.service})
  .then(data=>{
    res.status(200).json({data,success:true})
  })
  .catch((error)=>{
      res.status(404).json({error,success:false})
  })
})

router.put('/worker/updateprofile',authentication.verifyWorker,(req,res) =>{
  const fname=req.body.fname;
      const lname=req.body.lname;
      const gender=req.body.gender;
      const phone=req.body.phone;
      const experience=req.body.experience;
      Worker.findByIdAndUpdate({_id:req.worker._id},{
          fname:fname,
          lname:lname,
          gender:gender,
          phone:phone,
          experience:experience
      })
      .then((data)=>{
          res.status(203).json({data,success:true})
      })
      .catch((error)=>{
          res.status(404).json({error,success:false})
      })
})
router.put('/changebadge/:id/:badge',function(req,res){
  Worker.findByIdAndUpdate({_id:req.params.id},{badge:req.params.badge})
  .then(function(data){
          
    res.status(203).json({data,success:true})
})
.catch(function(e){
    res.status(400).json({message:e,success:false})
})
})
router.get('/findbyexperience/:experience',function(req,res){
  
  Worker.find({experience:req.params.experience})
  .then(data=>{
    console.log(data)
    res.status(200).json({data,success:true})
  })
  .catch(err=>{
    res.status(401).json({err,success:false})
    console.log(err)
  })

})

router.get('/findbygender/:gender',function(req,res){
  
  Worker.find({gender:req.params.gender})
  .then(data=>{
    console.log(data)
    res.status(200).json({data,success:true})
  })
  .catch(err=>{
    res.status(401).json({err,success:false})
    console.log(err)
  })

})

module.exports = router;