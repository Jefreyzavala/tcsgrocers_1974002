let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let userSchema=mongoose.Schema({
    // _id:Number,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    dob:String,
    phone_no:String,
    address:String,
    lock:{type:Number,default:0},
    count_incorrect:{type:Number,default:0}
})

let userModel=mongoose.model("user",userSchema,"user")

module.exports=userModel