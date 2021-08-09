const mongoose=require('mongoose');
const Feedback=mongoose.model('Feedback',{
    byemployeremail:{
        type:String
        
    },
    toworkeremail:{
        type:String
        
    },
    rating:{
        type: Number

    },
    feedback:{
        type: String
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    hireID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hire'
    }
})
module.exports=Feedback