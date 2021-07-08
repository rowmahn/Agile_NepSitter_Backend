const mongoose = require('mongoose');
const Worker = mongoose.model('Worker', {
    Fname: {
        type: String,
        required:true
    },
    Lname: {
        type: String,
        required:true
    },
    BirthDate: {
        type: String,
        required:true
    },
    Gender: {
        type: String,
        required:true
    },
    PhoneNo: {
        type: String,
        required:true
    },
    Address: {
        type: String,
        required:true
    },
    JobCategory: {
        type: String,
        required:true
    },
    AvailabilityMorning: [{
    type: String,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','thrusday','Friday','Saturday'],
    }],
    AvailabilityEvening: [{
    type: String,
     enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','thrusday','Friday','Saturday'],
     }],
    AvailabilityAfternoon: [{
     type: String,
     enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','thrusday','Friday','Saturday'],
     }],
     AvailabilityNight: [{
     type: String,
     enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','thrusday','Friday','Saturday'],
     }],
    Email: {
        type: String,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    ProfilePic:{
        type:String
    },
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


