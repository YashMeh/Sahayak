var mongoose=require("mongoose")
    medInfo=[""],
    symptoms=[""]
var logDataSchema=new mongoose.Schema({
    aadhar:String,
    symptoms:Array,
    medicine:Array,
    state:String,
    city:String,
    date:Number,
    tbstatus:Number,
    symptomCount:Number
})	
module.exports=mongoose.model("log",logDataSchema);