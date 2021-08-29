const mongoose = require('mongoose');
const Worker = mongoose.model('Worker', {
    fname: {
        type: String,
        required:true
       
    },
    lname: {
        type: String,
        required:true
        
    },
    bdate: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required:true,
        unique: true
      
    },
    email: {
        type: String,
        required:true,
        unique: true

    },
    password: {
        type: String,
        required:true
       
    },
    address: {
        type: String,
        required:true
       
    },
    city: {
        type: String,
        required:true
        
    },
    district: {
        type: String,
        required:true
        
    },

    yourself: {
        type: String,
        required:true
        
    },
    experience: {
        type: String,
        required:true
        
    },
    gender: {
        type: String,
        required:true
        
    },
    province: {
        type: String,
        required:true
        
    },
    study: {
        type: String,
        required:true
      
    },
    status: {
        type: String,
        required:true
        
    },
    smoke: {
        type: String,
        required:true
       
    },
    drink: {
        type: String,
        required: true
        
    },
    jobcategory: {
        type: String,
        required:true
      
    },
    
    availabilityMorning: [{
    type: String,
    }],
    availabilityEvening: [{
    type: String,
    //  enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thrusday','Friday','Saturday'],
     }],
    availabilityAfternoon: [{
     type: String,
     }],
     availabilityNight: [{
     type: String,
     }],
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    approved:{
        type:Boolean,
        default:false
    },
    image:{
        type:String
    },
    badge:{
        type:String,
        default:'Beginner',
        enum:['Beginner','Intermediate','Professional']
    }
})
    module.exports = Worker;


