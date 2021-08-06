const express=require('express');//third party
const bodyParser=require('body-parser')// coremodule
const cors=require('cors');
const path=require('path')
const publicDir = path.join(__dirname,'public')
const app=express();
app.use(express.static(publicDir));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

const db=require('./database/db')

const port = process.env.port || 4000;



app.use(cors(
    // {credentials: true, origin: 'http://localhost:90'}
    ))
    


const EmployerRoute=require('./routes/employeerRoute')
app.use(EmployerRoute)
const HireRoute=require('./routes/HireRoute')
app.use(HireRoute)
const WorkRoute=require('./routes/WorkRoute')
app.use(WorkRoute)
const NotificationRoute=require('./routes/NotificationRoute')
app.use(NotificationRoute)
const ReportRoute=require('./routes/ReportRoute')
app.use(ReportRoute)
const ApplyforjobRoute = require('./routes/ApplyforjobRoute'); // for CRUD on user
app.use(ApplyforjobRoute);


app.listen(port, ()=>console.log("App listening on port "+ port )
);