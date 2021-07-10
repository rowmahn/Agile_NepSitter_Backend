
const Workerlogin = require('../models/Applyforjob');
const mongoose = require('mongoose');
 
const url= 'mongodb://127.0.0.1:27017/Nepsitterdb';
 
beforeAll(async() =>{
await mongoose.connect(url, {
useNewUrlParser:true,
useCreateIndex:true
});
});
 
afterAll(async() =>{
await mongoose.connection.close();
});
 
describe('Test for Worker Login', () =>{

// it('Worker Login', () =>{
// const workerlogin= {
// email:"dasdas@gmail.com",
// password:"aaaaaa"
// };
// return Workerlogin.create(workerlogin)
//     .then((pro_ret) =>{
//     expect(pro_ret.Tendername).toEqual('Building construction');
// });
// });

it('Test to login', async() =>{
    const status= await Worker.find({_id:Object('607ed31c58d3ab18501278ce')});
    expect(status.ok)
    });
 

})