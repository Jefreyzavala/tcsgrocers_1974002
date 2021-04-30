let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let fundsSchema=mongoose.Schema({
    // _id:Number,
    account_number:{type:String,default:"0"},
    amount:{type:Number,default:0},
})

let fundsModel=mongoose.model("funds",fundsSchema,"funds")

module.exports=fundsModel