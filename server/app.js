const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/user.js")
// const { urlencoded } = require("body-parser");


mongoose.connect(
    "mongodb+srv://Test1:Test1@cluster0.ua0e3.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    ()=>{
        console.log("Mongoose is Connected")
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
    origin:"http://localhost:3000",  //location of react app we are connecting to
    credentials:true    
}));

app.use(session({
    secret:"secretcode",
    resave:true,
    saveUninitialized:true
}));

app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require("../server/config/passportConfig")(passport);
//Routes

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

app.post('/register',(req,res)=>{
User.findOne({username:req.body.username},async (err,doc)=>{
if(err) throw err;
if(doc){
    res.send("User Already Exists");
}
if(!doc){
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const newUser = new User({
        username:req.body.username,
        password:hashedPassword
    });
    await newUser.save();
    res.send("User Created");
}
});
});

app.get('/getUser',(req,res)=>{
    res.send(req.user);
})
//Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server Started http://localhost:${PORT}`)
})