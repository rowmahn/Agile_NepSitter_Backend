const express=require('express');
const router=express.Router();
const Employeer=require('../models/Employeer')
const {check,validationResult}=require('express-validator')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads')


router.post('/employer/register',

function(req,res){
     
        const Email=req.body.Email;
        
        const Fullname=req.body.Fullname;
        const Age=req.body.Age;
        const Location=req.body.Location;
        const Password=req.body.Password;
        const Contact=req.body.Contact;
        const Citizenship=req.body.Citizenship;
        const Gender=req.body.Gender;
        
        bcryptjs.hash(Password,10,function(err,hash){
            const data=new Employeer({
                Fullname:Fullname,
                Contact:Contact,
                Email:Email,
                Password:hash,
               
                Gender:Gender,
                Age:Age,
                Location:Location,
                Citizenship:Citizenship
                
            })
            data.save()
            .then(function(data){
                res.status(201).json({success:true,data})

            })
            .catch(function(e){
                
                res.status(500).json({message:e,success:false})
                
            })
        
        })
    
    // }
    // else{
    //     res.status(400).json(errors.array())
    // }
   
})
router.get('/unapproved/employer',function(req,res){
    Employeer.find({Approved:false}).sort('-CreatedAt').select('-Password')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
        
        res.status(500).json({message:e,success:false})
        
    })
})
router.put('/approve/employer/:id',function(req,res){
    console.log(req.params.id)
    Employeer.findByIdAndUpdate({_id:req.params.id},{Approved:true})
    .then(function(data){
        res.status(203).json({success:true,data})

    })
    .catch(function(e){
        console.log(e)
        res.status(500).json({message:e,success:false})
        
    })
})
router.delete('/denyemployer/:id',function(req,res){
    Employeer.deleteOne({_id:req.params.id})
    .then(function(data){
        res.status(203).json({success:true,data})

    })
    .catch(function(e){
        
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/employer/profile',authentication.verifyEmployer,(req,res)=>{
    Employeer.findById({_id:req.employer._id})
    .then((data)=>{
        res.status(200).json({data,success:true})
    })
    .catch((error)=>{
        res.status(404).json({error,success:false})
    })
})
router.put('/employer/upprofilepic',authentication.verifyEmployer,upload.single('Image'),(req,res)=>{
    if(req.file==undefined){
        return res.status(400).json({message:"invalid image Type!!"})
      }
      const Image=req.file.filename
      Employeer.findByIdAndUpdate({_id:req.employer._id},{Image:Image})
      .then((data)=>{
        res.status(203).json({data,success:true})
    })
    .catch((error)=>{
        res.status(404).json({error,success:false})
    })

})
router.post('/user/login',function(req,res){
    Employeer.findOne({Email:req.body.Email})
    .then(function(userData){
        if(userData===null){
           return res.status(401).json({message:"Authentication fail"})
        }
        const approved=userData.Approved
        if(approved===true){
            bcryptjs.compare(req.body.Password,userData.Password,function(err,cresult){
                if(cresult===false){
                  return  res.status(401).json({message:" unAuthorized user"})
                }
               const token= jwt.sign({uid:userData._id},'secretkey');
               res.status(200).json({success:true,token:token,message:"login Successful", userData})
            })
        }
        else{
            res.status(404).json({message:"unapproved user",success:false})
          }
       
    })
    .catch(function(err){
        console.log(err)
        res.status(403).json({message:err})
    })
})

module.exports=router