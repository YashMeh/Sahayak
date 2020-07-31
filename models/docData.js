var mongoose=require("mongoose")
	
var docDataSchema=new mongoose.Schema({
    uid:String,
    name:String,
    gender:String,
    yob:String,
    co:String,
    house:String,
    street:String,
    loc:String,
    vtc:String,
    po:String,
    dist:String,
    subdist:String,
    state:String,
    pincode:String,
    dob:{
        type:Date
    }
    
})	
module.exports=mongoose.model("doc",docDataSchema);