const mongoose=require('mongoose');
const Hire=mongoose.model('Hire',{
    EmployerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employeer'
        
    },
    WorkerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Worker'
        
    },
    Location:{
        type:String,
        require:true
    },
    Day:[{
        type:String
    }],
    shift:[{
        type:String
    }],
    hours:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

})
module.exports=Hire