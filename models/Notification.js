const mongoose=require('mongoose')
const Notification=mongoose.model('Notification',{
    number: {
        type: Number,
      },
      title: {
        type: String,
        required: [true, 'Notfication Title']
      },
      body: {
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