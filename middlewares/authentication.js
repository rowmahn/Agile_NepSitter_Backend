const jwt=require('jsonwebtoken')
const Employer=require('../models/Employeer')

//check for token

module.exports.verifyEmployer=function(req,res,next){
    
     
    try{
        
        const token=req.headers.authorization.split(" ")[1];
        
        const data=jwt.verify(token, 'secretkey');
        Employer.findOne({_id:data.uid})
        .then(function(result){
           
             req.eployer=result
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