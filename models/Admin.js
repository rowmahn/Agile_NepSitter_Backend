const mongoose=require('mongoose')
const Admin=mongoose.model('Admin',{
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        min:6,
        max:15,
        require:true
    }
})
module.exports=Admin