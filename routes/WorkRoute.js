const express = require('express');
const router = express.Router();
const Work = require('../models/Work')
const authentication=require('../middlewares/authentication')
const upload=require('../middlewares/uploads');
const Hire=require('../models/Hire')
router.post('/timer/:hr/:hireID', function(req,res){
    
   
    const Workinghours=req.params.hr
    const hireId=req.params.hireID
    console.log(hireId)
    console.log(Workinghours)
    Hire.findById({_id:hireId}).populate('EmployerID').populate('WorkerID')
    .then(function(result){
        const EmployerID=result.EmployerID._id
        const WorkerID=result.WorkerID._id
        const data=new Work({
            hireId:hireId,
            Workinghours:Workinghours, 
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
        console.log(result)

    })
    .catch(function(e){
        res.status(404).json({message:"hireid not found",success:false})
    })
})
router.get('/getworkinghour/:hireId',authentication.verifyEmployer,function(req,res){
    const hireId=req.params.hireId;
    
    Work.find({hireId:hireId,paid:false}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/getworkinghistory/:hireId',function(req,res){
    const hireId=req.params.hireId;
    Work.find({hireId:hireId}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.get('/works/paid/:hireId',function(req,res){
    const hireId=req.params.hireId
    Work.find({hireId:hireId,paid:true}).sort('-CreatedAt')
    .then(function(data){
        res.status(201).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
router.put('/payment/:id',function(req,res){
    const id=req.params.id
    Work.findByIdAndUpdate({_id:id},{paid:true})
    .then(function(data){
        res.status(203).json({success:true,data})

    })
    .catch(function(e){
       
        res.status(500).json({message:e,success:false})
        
    })
})
app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { Workinghours, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount:Workinghours* 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Paid the work completed!!`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  })
module.exports = router;