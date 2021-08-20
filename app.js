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

const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const config = require('./config.env');
passport.use(new Strategy({
  clientID: config.FACEBOOK_CLIENT_ID,
  clientSecret: config.FACEBOOK_CLIENT_SECRET,
  callbackURL: '/facebook/callback',
  profileFields: ['id', 'displayName', 'email', 'name', 'photos'],
  passReqToCallback: true,
  
},
function(accessToken, refreshToken, profile, cb) {
  // save the profile on the Database
  // Save the accessToken and refreshToken if you need to call facebook apis later on
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/facebook', passport.authenticate('facebook'), function(req,res){
  console.log("egwerg")
});
app.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: `${config.FRONTEND_HOST}/error`}), (req, res) => {
  console.log('fdvdfs')
  res.send(`${config.FRONTEND_HOST}/success`);
}) ;


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
