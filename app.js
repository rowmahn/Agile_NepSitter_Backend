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

const port = process.env.port || 90;

const passport = require('passport')
const session = require('express-session')
const facebookStrategy = require('passport-facebook').Strategy


app.use(session({ secret: 'secretkey' }));
app.use(passport.initialize());

passport.use(new facebookStrategy({

  // pull in our app id and secret from our auth.js file
  clientID        : "815329625805537",
  clientSecret    : "0bd9c60210f77c140d1059afea4dfd3b",
  callbackURL     : "http://localhost:90/facebook/callback",
  profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']

},// facebook will send back the token and profile
function(token, refreshToken, profile, done) {

  console.log(profile)
  return done(null,profile)
}));

app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}))
app.get('/facebook/callback',passport.authenticate('facebook',{
  successRedirect:'/profile',
  failureRedirect:'/failed'
}))
 passport.serializeUser(function(user,done){
   done(null,user)
 });

 passport.deserializeUser(function(id,done){
 return done(null,id)
 })



app.get('/profile',(req,res)=>{
  res.send("You are a valid user")
})
app.get('/failed', (req,res)=>{
  res.send("Invalid User")
})

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
// const NotificationRoute=require('./routes/NotificationRoute')
// app.use(NotificationRoute)
const ReportRoute=require('./routes/ReportRoute')
app.use(ReportRoute)
const ApplyforjobRoute = require('./routes/ApplyforjobRoute'); // for CRUD on user
const { serializeUser } = require('passport');
app.use(ApplyforjobRoute);


app.listen(process.env.PORT || 90, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
