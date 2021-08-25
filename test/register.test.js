const { compare } = require('bcryptjs');
const mongoose = require('mongoose');
const Employeer = require('../models/Employeer');

const url = 'mongodb://localhost:27017/nepsitter2021';
beforeAll(async () => {
await mongoose.connect(url, {
useNewUrlParser: true,
useCreateIndex: true
});
});
// const db=require('../database/test_db')
afterAll(async () => {
    await mongoose.connection.close();
    });

    describe('Employer Schema test anything', () => {
        // the code below is for insert testing
        it('Register Employer  testing anything', () => {
        const Employer = {
        'Fullname': 'Nokia',
        'Email': 'jhonsmith12@gmail.com',
        'Password':'Social',
        'Contact':'8031212311',
        'Gender':'Male',
        'Location':'Anamnagar',
        'Age':'21',
        'Citizenship':'0762/34/09'
        };
        return Employeer.create(Employer)
        .then((pro_ret) => {
        expect(pro_ret.Fullname).toEqual('Nokia');
        })

    })
//logi unit testing
    it('Employer Schema test anything', () => {
      const data=  Employeer.findOne({'Email':'jhonsmith@gmail.com'})
      compare(Social,data.Password)
      return data
      .then((logininfo)=>{
          expect(logininfo.Email).toEqual('jhonsmith@gmail.com')
      })

    })

})