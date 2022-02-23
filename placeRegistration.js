const mongoose= require("mongoose");
const placeSchema=new mongoose.Schema({
    venueId:{
    type:String,
    required:true,
},
venueName:
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
venueImage:
{

},

})

const managerModel=mongoose.model("manage",placeSchema);

module.exports=managerModel;