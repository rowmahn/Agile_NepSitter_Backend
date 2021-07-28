const mongoose=require('mongoose');
const Report=mongoose.model('Report',{
    byemployeremail:{
        type:String
        
    },
    toworkeremail:{
        type:String
        
    },
    title:{
        type: String,

    },
    issue:{
        type: String
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    byworkeremail:{
        type:String
    },
    toemployeremail:{
        type:String
    },
    hireID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hire'
    }
})
module.exports=Report