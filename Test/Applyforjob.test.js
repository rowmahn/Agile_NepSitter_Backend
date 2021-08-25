const Applyforjob = require('../models/Applyforjob');
const mongoose = require('mongoose');


// const db=require('../database/test_db')
const url = 'mongodb://localhost:27017/thilen';
beforeAll(async () => {
await mongoose.connect(url, {
useNewUrlParser: true,
useCreateIndex: true
});
});
afterAll(async () => {
    await mongoose.connection.close();
    });

 

    describe('Apply for job Schema test anything', () => {
        // the code below is for insert testing
        it('Add user testing anything', () => {
    const applyforjob = {

    'fname' : 'thilen',
    'lname ': 'lama',
    'bdate ': '02/09/1997',
   'phone':'9810285093',
   'email' : 'ab@gmail.com',
    'password': 'thilen197',
   'address': 'arubari',
    'city' : 'kathmandu',
    ' district ': 'kathmandu',
   ' yourself' :'me',
  ' certificate ': 'SLC',
   'gender' : 'male',
    'province ': 'Male',
    'study' : 'yes',
    'status' :'Married',
   'smoke': 'not yet',
   'drink': 'never'  ,
     'jobcategory' : 'nanny'

           
     
        
        };
        return Applyforjob.create(applyforjob)
        .then((pro_ret) => {
        expect(pro_ret.phone).toEqual('9810285093');
        })

 

    })
    // it('to test the update profile info', async () => {
    // return Applyforjob.findOneAndUpdate({_id :Object('6124eaa97313100f1c324b38')},
    // {$set : {Fullname:'brad PIIT'}})
    // .then((pp)=>{
    // expect(pp.Fullname).toEqual('deepak')
    // })
    // }); 
    // get user info
    // it('to test the get profile info', async () => {
    //     return Applyforjob.findById("6124eaa97313100f1c324b38")
    //     .then((pp)=>{
    //     expect(pp.phone).toEqual('brad PIIT')
    //     })
    //     });
        
// the code below is for delete testing
// it('to test the delete product is working or not', async () => {
//     const status = await Employeer.deleteOne({id:"6124eb4d04732f1458e4a4eb"})
//     expect(status.ok).toBe(1);
//     })


})

 


    
 