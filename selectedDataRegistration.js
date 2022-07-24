const { type } = require("express/lib/response");
const mongoose= require("mongoose");
const { required } = require("nodemon/lib/config");
const selectedDataSchema=new mongoose.Schema({

event_Type:    
    {
    type:String,
    required:true,
},
VenueName:
{
    type:String,
    required:true,
},
venueCost:
{
    type:String,
 
  required:true,
},


venueContact:
{
    type:String,
    required:true,
},
place_Category:
{
 type:String,
},

date:
{
    type:String,
    required:true,
    
},
item:
{
    type:String,
    required:true,
    
},
ingredient:
{
    type:String,
    required:true,
    
},
amount:
{
    type:String,
    required:true,
    
},
cost:
{
    type:String,
    required:true,
    
},
})
const userSelectedDataModel=mongoose.model("selected",selectedDataSchema);

module.exports=userSelectedDataModel;