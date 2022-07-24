const mongoose= require("mongoose");
const foodSchema=new mongoose.Schema({

 foodImage:
{
 type:String,
},

foodName:
{
    type:String,
    required:true,
},


description:
{
    type:String,
    required:true,
},

  foodCost:
{
    type:String,
   required:true,
},



})

const foodModel=mongoose.model("fooditem",foodSchema);

module.exports=foodModel;