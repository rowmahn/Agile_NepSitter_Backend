const mongoose = require('mongoose');
const Worker = mongoose.model('Worker', {
    fname: {
        type: String,
       
    },
    lname: {
        type: String,
        
    },
    bdate: {
        type: String,
        
    },
    phone: {
        type: String,
      
    },
    email: {
        type: String,

    },
    password: {
        type: String,
       
    },
    address: {
        type: String,
       
    },
    city: {
        type: String,
        
    },
    district: {
        type: String,
        
    },

    yourself: {
        type: String,
        
    },
    certificate: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    province: {
        type: String,
        
    },
    study: {
        type: String,
      
    },
    status: {
        type: String,
        
    },
    smoke: {
        type: String,
       
    },
    drink: {
        type: String,
        
    },
    jobcategory: {
        type: String,
      
    },
    
    availabilityMorning: [{
    type: String,
    
    }],
    // availabilityEvening: [{
    // type: String,
    //  enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thrusday','Friday','Saturday'],
    //  }],
    // availabilityAfternoon: [{
    //  type: String,
    //  enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thrusday','Friday','Saturday'],
    //  }],
    //  availabilityNight: [{
    //  type: String,
    //  enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thrusday','Friday','Saturday'],
    //  }],
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})
    module.exports = Worker;


