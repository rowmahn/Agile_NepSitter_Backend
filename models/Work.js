const mongoose=require('mongoose');
const Work=mongoose.model('WORK',{
    hireId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hire'
        
    },
    EmployerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employeer'
        
    },
    WorkerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Worker'
        
    },
    paid:{
        type:Boolean,
        default:false
    },
    Workinghours:{
        type:Number,
        require:true,
        default:0
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
module.exports=Work