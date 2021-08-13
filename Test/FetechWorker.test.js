import { test } from 'jest-circus'
import request from 'superagent'
import supertest from'supertest'
import app from '../app.js'


desbribe ("workers", function(){
   it('GET /showworkers/all --array worker',()=>{
   return request(app)
    .get('/showworkers/all')
    .set('accept', 'application/json')
    .expect('content-type' , /json/)
    .expect(200)
    
   })
}
)
