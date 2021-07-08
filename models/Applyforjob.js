const mongoose = require('mongoose');
const Worker = mongoose.model('Worker', {
    Fullname: {
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
    Availability: {
        type: String,
        required:true
    },
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


