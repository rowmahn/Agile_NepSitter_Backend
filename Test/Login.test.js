
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
it('Register Worker  testing anything', () => {
    const Worker = {
    'fname': 'Nokia',
    'lname':'nuron',
    'email': 'jhonsmith12@gmail.com',
    'password':'Social',
    'phone':'8031212311',
    'gender':'Male',
    'address':'Yogikuti',
    'province':'state 4',
    'certificate':'+2',
    'yourself':'hjbbadbjbjadsb',
    'study':'true',
    'status':'married',
    'smoke':'true',
    'drink':'true',
    'jobcategory':'baby sitting',
    'availabilityMorning':['sunday','monday'],
    'availabilityEvening':['sunday','monday'],
    'availabilityAfternoon':['sunday','monday'],
    'availabilityNight':['sunday','monday'],
    'bdate':'19/01/2000',
    'district':'Rupandehi',
    'city':'butwal'

    };
    return Workerlogin.create(Worker)
    .then((pro_ret) => {
    expect(pro_ret.fname).toEqual('Nokia');
    })

})
// it('Test to login', async() =>{
//     const status= await Worker.find({_id:Object('607ed31c58d3ab18501278ce')});
//     expect(status.ok)
//     });
 

})