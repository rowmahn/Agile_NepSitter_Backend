const Hire = require('../models/Hire');
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

 

    describe('Employer Schema test anything', () => {
        // the code below is for insert testing
        it('Add user testing anything', () => {
        const hire = {

           'Fullname':'thilen lama',
            'Contact':'9810285093',
            'Email':'d@gmail.com',
            'Password':'thilen197',
            'Gender':'Male',
            'Age':'23',
            'Location':'Aarubari',
           ' Citizenship':'87018735089274'
            
      
     
        
        };
        return Hire.create(employeer)
        .then((pro_ret) => {
        expect(pro_ret.Email).toEqual('d@gmail.com');
        })

 

    })
    it('to test the update profile info', async () => {
    return Employeer.findOneAndUpdate({_id :Object('6124eaa97313100f1c324b38')},
    {$set : {Fullname:'brad PIIT'}})
    .then((pp)=>{
    expect(pp.Fullname).toEqual('brad PIIT')
    })
    }); 
    // get user info
    it('to test the get profile info', async () => {
        return Employeer.findById("6124eaa97313100f1c324b38")
        .then((pp)=>{
        expect(pp.Fullname).toEqual('brad PIIT')
        })
        });
        
// the code below is for delete testing
it('to test the delete product is working or not', async () => {
    const status = await Employeer.deleteOne({id:"6124eb4d04732f1458e4a4eb"})
    expect(status.ok).toBe(1);
    })


})

 


    
 