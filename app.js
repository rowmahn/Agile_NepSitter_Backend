const express=require('express');//third party
const bodyParser=require('body-parser')// coremodule
const cors=require('cors');
const path=require('path')
const publicDir = path.join(__dirname,'public')
const app=express();
const ApplyforjobRoute = require('./Routes/ApplyforjobRoute'); // for CRUD on user
app.use(express.static(publicDir));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

const db=require('./database/db')



app.use(cors(
    // {credentials: true, origin: 'http://localhost:3000'}
    ))
    app.use(ApplyforjobRoute);


const EmployerRoute=require('./routes/employeerRoute')
app.use(EmployerRoute)
const HireRoute=require('./routes/HireRoute')
app.use(HireRoute)
const WorkRoute=require('./routes/WorkRoute')
app.use(WorkRoute)


app.listen(90);