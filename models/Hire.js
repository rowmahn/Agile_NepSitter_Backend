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
    Shift:[{
        type:String
    }],
    Hours:{
        type:String
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt:{
        type: Date,
        default: Date.now
    }

})
module.exports=Hire