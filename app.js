const express=require('express');//third party
const bodyParser=require('body-parser')// coremodule
const cors=require('cors');
const path=require('path')
const publicDir = path.join(__dirname,'public')
const app=express();
app.use(express.static(publicDir));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
const stripe = require("stripe")("sk_test_51JQEfuSC8kT63K4ckDlri6qoa4pyWKh16AZyXLxOPJdO4lRN9nax92pxyR8gsuO9KPwzA6VgrpO6ROUtANvz0wmd00n6JdFPhB");
const db=require('./database/db')

const port = process.env.port || 90;



app.use(cors(
    // {credentials: true, origin: 'http://localhost:3000'}
    ))
    

//Routes
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

const FeedbackRoute=require('./routes/FeedbackRoute')
app.use(FeedbackRoute)
app.get('/',function(req,res){
  res.send("wel come to nepsitter !!")
})
app.listen(process.env.PORT || 90, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
