let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let cartSchema=mongoose.Schema({
    // _id:Number,
    pname:String,
    price:Number,
    pquantity:Number,
    status:{type:String,default:'Pending'},
    date : { type : Date, default: new Date() }
})

let cartModel=mongoose.model("cart",cartSchema,"cart")

module.exports=cartModel