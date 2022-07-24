const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
    type:String,
    required:true,
},
lastName:
{
    type:String,
    required:true,
},
  presentAddress:
{
    type:String,
   required:true,
},


parmanentAddress:
{
    type:String,
    required:true,
},

givenNumber:{
    type:Number,
    required:true,
},
gender:{
    type:String,
    required:true,
},
givenEmail:{
    
    
},
passwordtwo:
{

},

})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;