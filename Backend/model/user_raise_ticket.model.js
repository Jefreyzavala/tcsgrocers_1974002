let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let raiseTicketSchema=mongoose.Schema({
    // _id:Number,
    firstname:String,
    lastname:String,
    email:String,
    complain_details:String
})

let raiseTicketModel=mongoose.model("raiseTicket",raiseTicketSchema,"raiseTicket")

module.exports=raiseTicketModel