const jwt=require('jsonwebtoken')
const Employer=require('../models/Employeer')
const Worker=require('../models/Applyforjob')
//check for token

module.exports.verifyEmployer=function(req,res,next){
   
     
    try{
        
        const token=req.headers.authorization.split(" ")[1];
        
        const data=jwt.verify(token, 'secretkey');
       
        Employer.findOne({_id:data.uid})
        .then(function(result){
           
             req.employer=result
            next()
    })
    .catch(function(ex){
        
        res.status(403).json(ex)
    })
    }
    catch(e){
        console.log(e)
        res.status(403).json({error:e})
        
    }
    
}

module.exports.verifyWorker=function(req,res,next){
    console.log(req.body)
     
    try{
        
        const token=req.headers.authorization.split(" ")[1];
        
        const data=jwt.verify(token, 'secretkey');
        Worker.findOne({_id:data.wid})
        .then(function(result){
           
             req.worker=result
            next()
    })
    .catch(function(ex){
        res.status(403).json(ex)
    })
    }
    catch(e){
    
        res.status(403).json({error:e})
        
    }
    
}