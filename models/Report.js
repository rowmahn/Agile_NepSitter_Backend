const mongoose=require('mongoose');
const Report=mongoose.model('Report',{
    empid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employeer'
        
    },
    wid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Worker'
        
    },
    title:{
        type: String,

    },
    issue:{
        type: String
    }
})
module.exports=Report