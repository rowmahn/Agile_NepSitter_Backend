// Employeer MODEL

// const Employeer = require('../Models/Employeer');
// const mongoose = require('mongoose');
 
// const url= 'mongodb://127.0.0.1:27017/sitter_db';
 
// beforeAll(async() =>{
// await mongoose.connect(url, {
// useNewUrlParser:true,
// useCreateIndex:true
// });
// });
 
// afterAll(async() =>{
// await mongoose.connection.close();
// });
// describe('Testing on EmployerRoute', () =>{

// it('Add Employeer testing', () =>{
// const employeer= {
// 'Fullname':'Dipak Das',
// 'Contact':'9808133056',
// 'Email':'dasdipak111@gmail.com',
// 'Password':'dasdipak123',
// 'Gender':'Male',
// 'Age':'23',
// 'Location': 'maitidevi',
// 'Citizenship': '870187'
// };
// return Employeer.create(employeer)
//     .then((pro_ret) =>{
//     expect(pro_ret.Email).toEqual('dasdipak111@gmail.com');
// });
// });
  
// it('to test the Employeer update ', async() =>{
// return Employeer.findOneAndUpdate({_id :Object('612fdbcba01aeb29c8032fb3')},
//  {$set :{Fullname:'Dipak Das'}})
//     .then((fdn)=>{
// expect(fdn.Fullname).toEqual('Dipak Das')
// })
// });

// it('Test to View Employeer profile', async() =>{
//     const status= await Employeer.find({_id:Object('612fdbcba01aeb29c8032fb3')});
//     expect(status.ok)
//     });

// it('to test while delete the Employeer is working or not', async() =>{
//     const status= await Employeer.deleteOne({_id :Object('612fdb6ce1e7742b68ab1d91')});
//     expect(status.ok).toBe(1);
//     });


// })




// Applyforjob MODEL

// const Worker = require('../Models/Applyforjob');
// const mongoose = require('mongoose');
 
// const url= 'mongodb://127.0.0.1:27017/sitter_db';
 
// beforeAll(async() =>{
// await mongoose.connect(url, {
// useNewUrlParser:true,
// useCreateIndex:true
// });
// });
 
// afterAll(async() =>{
// await mongoose.connection.close();
// });
// describe('Testing on ApplyforjobRoute', () =>{

// it('Add Worker testing', () =>{
// const worker= {
//    'fname' : 'Dipak',
//    'lname': 'Das',
//    'bdate': '02/09/1997',
//    'phone':'9808133056',
//    'email' : 'testing11@gmail.com',
//    'password': 'testing123',
//    'address': 'maitidevi',
//    'city' : 'kathmandu',
//    'district': 'kathmandu',
//    'yourself' :'chill',
//    'certificate': 'Hseb',
//    'gender' : 'male',
//    'province': 'Bagmati',
//    'study' : 'yes',
//    'status' :'Married',
//    'smoke': 'not yet',
//    'drink': 'never'  ,
//    'jobcategory' : 'nanny'
// };
// return Worker.create(worker)
//     .then((pro_ret) =>{
//     expect(pro_ret.email).toEqual('testing11@gmail.com');
// });
// });
  
// it('to test the Worker update ', async() =>{
// return Worker.findOneAndUpdate({_id :Object('612febbd1d8e822d1c5e0022')},
//  {$set :{fname:'Dipak'}})
//     .then((fdn)=>{
// expect(fdn.fname).toEqual('Dipak')
// })
// });

// it('Test to View Worker profile', async() =>{
//     const status= await Worker.find({_id:Object('612febbd1d8e822d1c5e0022')});
//     expect(status.ok)
//     });

// it('to test while delete the Worker is working or not', async() =>{
//     const status= await Worker.deleteOne({_id :Object('612febbd1d8e822d1c5e0022')});
//     expect(status.ok).toBe(1);
//     });


// })


// Hire MODEL

const Hire = require('../Models/Hire');
const mongoose = require('mongoose');
 
const url= 'mongodb://127.0.0.1:27017/sitter_db';
 
beforeAll(async() =>{
await mongoose.connect(url, {
useNewUrlParser:true,
useCreateIndex:true
});
});
 
afterAll(async() =>{
await mongoose.connection.close();
});
describe('Testing on HireRoute', () =>{

it('Insert Hire testing', () =>{
const hire= {
   'EmployerID' : '612fdbcba01aeb29c8032fb3',
   'WorkerID': '612febbd1d8e822d1c5e0022',
   'Location': 'Maitidevi',
   'Package': 'monthly',
   'Date' : '02/09/2021',
   
};
return Hire.create(hire)
    .then((pro_ret) =>{
    expect(pro_ret.Package).toEqual('monthly');
});
});
  
it('to test the Hire update ', async() =>{
return Hire.findOneAndUpdate({_id :Object('612ff04e3c5a1d15745ce371')},
 {$set :{Location:'Maitidevi'}})
    .then((fdn)=>{
expect(fdn.Location).toEqual('Maitidevi')
})
});

it('Test to View Hired form', async() =>{
    const status= await Hire.find({_id:Object('612ff04e3c5a1d15745ce371')});
    expect(status.ok)
    });

it('to test while delete the Hired form is working or not', async() =>{
    const status= await Hire.deleteOne({_id :Object('612ff04e3c5a1d15745ce371')});
    expect(status.ok).toBe(1);
    });


})








    
 