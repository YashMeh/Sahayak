var mongoose=require("mongoose")
    medInfo=["Isoniazid","Rifampin","Ethambutol","Pyrazinamide"],
    symptoms=["Coughing up blood for 3 weeks or longer","Chest Pain","Coughing up blood or sputum","Fatigue","Weight Loss","No Appetite","Chills","Fever","Sweating at night"]
var userDataSchema=new mongoose.Schema({
    aadhar:String,
    name:String,
    dob:String,
    city:String,
    gender:String,
    address:String,
    pincode:String,
    state:String,
    symptoms:Array,
    medicine:Array,
    tbstatus:Number,
    symptomCount:Number,
    date:Number
    

	
})	
module.exports=mongoose.model("user",userDataSchema);