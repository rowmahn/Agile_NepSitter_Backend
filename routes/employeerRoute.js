const express=require('express');
const router=express.Router();
const Employeer=require('../models/Employeer')
const {check,validationResult}=require('express-validator')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads')


router.post('/employer/register',
// [
//     check('Email',"Email is required!").not().isEmpty(),
//     check('Email',"It is not valid email").isEmail(),
//     check('Fullname',"Fullname shouldnot be empty").not().isEmpty(),
//     check('Password',"password should not be empty!!!").not().isEmpty(),
//     check('Contact',"Phone should not be empty !!").not().isEmpty(),
    
// ],
// upload.single('Citizenship'),
function(req,res){
    
    // const errors=validationResult(req);
    
console.log(req.body)
    // if(errors.isEmpty()){
        // if(req.file==undefined){
        //     return res.status(400).json({message:"invalid image Type!!"})
        // }
        
        const Email=req.body.Email;
        
        const Fullname=req.body.Fullname;
        const Age=req.body.Age;
        const Location=req.body.Location;
        const Password=req.body.Password;
        const Contact=req.body.Contact;
        // const Image=req.file.filename;
        const Citizenship=req.body.Citizenship;
        const Gender=req.body.Gender;
        
        bcryptjs.hash(Password,10,function(err,hash){
            const data=new Employeer({
                Fullname:Fullname,
                Contact:Contact,
                Email:Email,
                Password:hash,
                // Image:Image,
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

module.exports=router