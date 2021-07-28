const mongoose=require('mongoose')
const Notification=mongoose.model('Notification',{
    number: {
        type: Number,
      },
      title: {
        type: String,
        required: [true, 'Notfication Title']
      },
      message: {
        type: String,
        required: [true, 'Notification Message']
      },
      date: {
        type: Date,
        default: Date.now,
      },
      views: {
        type:Boolean,
        default:false
      
      },
      hireID:{
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
            
        }

})
module.exports=Notification