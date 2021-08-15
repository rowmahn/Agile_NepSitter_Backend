const mongoose=require('mongoose');
const Feedback=mongoose.model('Feedback',{
    
    rating:{
        type: Number

    },
    feedback:{
        type: String
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
   
    ,WorkerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Worker'
    },
    EmployerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employeer'
    }

})
module.exports=Feedback