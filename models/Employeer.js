const mongoose=require('mongoose');
const Employeer=mongoose.model('Employeer',{
    Fullname:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        min:6,
        max:15,
        require:true
    },
    Contact:{
        type:String,
        min:10,
        require:true
    },
    Image:{
        type:String
        
    },
    Gender:{
        type:String,
        enum:['Male','Female','Other']
        
    },
    Location:{
        type:String,
        require:true
    },
    Age:{
        type:String
    },
    Citizenship:{
        type:String,
        require:true
    },
    Approved:{
        type:Boolean
    }

})
module.exports=Employeer