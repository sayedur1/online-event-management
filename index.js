const express = require("express");
//const req = require("express/lib/request");
const app=express();
const mongoose=require("mongoose");
//const userModel=require("./model/userModel");
const usermodel = require("./model/usersRegistration");
const placeModel = require("./model/placeRegistration");

const cors= require("cors");

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://sayedur:sustcse0505@cluster0.uftbr.mongodb.net/mern?retryWrites=true&w=majority"

    );
/* users registration*/
app.post("/Register",async(req, res)=>{
    const data=req.body;
    const newuser=new usermodel(data);
    await newuser.save();
    res.json(data);
   
 
    });  

    /* admin venue save*/
    app.post("/venueManagement",async(req, res)=>{
        const data=req.body;
        console.log("venue valuue..",data.venueName)
        const newPlace=new placeModel(data);
        await newPlace.save();
        res.json(data);
       
      
        });  

app.post("/Login",async(req,res)=>{
    const emailId=req.body.givenEmail;
    const password=req.body.passwordtwo;

    console.log("email id..",req.body.givenEmail);
    console.log("password..",req.body.passwordtwo);


   usermodel.findOne({givenEmail:emailId,passwordtwo:password},(err,result)=>{
        if(result!==null)
        res.sendStatus(200);
         else 
         res.sendStatus(500);
       
    })

   app.use((err,req,res,next)=>{
       if(err)
       res.status(500).send("wrong username or password");
   } )
    
});
const port = process.env.PORT || 8080;
console.log("port",port);
app.listen(port,()=>{
    console.log("server run successfully");

});

