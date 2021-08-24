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
const stripe = require("stripe")("sk_test_51JQEfuSC8kT63K4ckDlri6qoa4pyWKh16AZyXLxOPJdO4lRN9nax92pxyR8gsuO9KPwzA6VgrpO6ROUtANvz0wmd00n6JdFPhB");
const db=require('./database/db')
const { v4: uuidv4 } = require('uuid');


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
// const NotificationRoute=require('./routes/NotificationRoute')
// app.use(NotificationRoute)
const ReportRoute=require('./routes/ReportRoute')
app.use(ReportRoute)

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
   
  });
app.listen(90);