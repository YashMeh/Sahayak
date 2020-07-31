var mongoose=require("mongoose")
	
var shopDataSchema=new mongoose.Schema({
    initialCount:Number,
    presentCount:Number,
    city:String,
    state:String
    
})	
module.exports=mongoose.model("shop",shopDataSchema);