let userModel=require("../model/user.model.js")
let raiseTicketModel=require("../model/user_raise_ticket.model.js")
let cartModel=require("../model/cart.model.js")
let fundsModel=require("../model/funds.model.js")


let storeUserDetails=(req,res)=>{
    let details=new userModel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        dob:req.body.dob,
        phone_no:req.body.phone_no,
        address:req.body.address
    })

    details.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Record stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}

let getUserDetails=(req,res)=>{
    userModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let raiseTicket=(req,res)=>{
    let details=new raiseTicketModel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        complain_details:req.body.complain_details
    })

    details.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Ticket raised successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}

let getRaiseTickets=(req,res)=>{
    raiseTicketModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let editUserProfile=(req,res)=>{
    let updatedfirstname=req.body.firstname
    let updatedlastname=req.body.lastname
    let updatedemail=req.body.email
    let updatedpassword=req.body.password
    let updatedphone_no=req.body.phone_no
    let updatedaddress=req.body.address
    

    userModel.updateMany({firstname:updatedfirstname},{$set:{lastname:updatedlastname,email:updatedemail,password:updatedpassword, phone_no:updatedphone_no, address:updatedaddress}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Product updated succesfully")
            }else {
                    res.send("No such Product");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let addToCart=(req,res)=>{
    let details=new cartModel({
        pname:req.body.pname,
        price:req.body.price,
        pquantity:req.body.pquantity
    })

    details.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Record stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}

let deleteFromCart=(req,res)=>{
    let pname=req.params.pname

    cartModel.deleteOne({pname:pname},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("Record not present");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let getCartItems=(req,res)=>{
    cartModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let editFunds=(req,res)=>{
    // let updatedaccount_number=req.body.account_number
    let updatedamount=req.body.amount
    
    

    fundsModel.updateMany({price:updatedamount},{$set:{amount:amount+updatedamount}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Product updated succesfully")
            }else {
                    res.send("No such Product");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let addFunds=(req,res)=>{
    let details=new fundsModel({
        account_number:req.body.account_number,
        amount:req.body.amount,
    })

    details.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Record stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}

let getFunds=(req,res)=>{
    fundsModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let updateIncorrectCount=(req,res)=>{
    let updatedemail=req.body.email
    console.log(updatedemail)
    

    userModel.findOneAndUpdate({email:updatedemail},{$inc:{count_incorrect:1}},(err,result)=>{
        if(!err){
              res.send("Incorrect Credentials");
            }
        else {
            res.send("Error generated "+err);
        }
    })
}

let updateIncorrectLock=(req,res)=>{
    let updatedemail=req.body.email
    console.log(updatedemail)
    

    userModel.findOneAndUpdate({email:updatedemail},{$inc:{lock:1}},(err,result)=>{
        if(!err){
                    res.send("Account is locked")
            }
        else {
            res.send("Error generated "+err);
        }
    })
}

let deleteTicket=(req,res)=>{
    let email=req.params.email

    raiseTicketModel.deleteOne({email:email},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("Record not present");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

let unlockUser=(req,res)=>{
    let updatedemail=req.body.email 
    console.log(updatedemail)

    userModel.updateMany({email:updatedemail},{$set:{lock:0}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Unlocked succesfully")
            }else {
                    res.send("No such User");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateCartItems=(req,res)=>{
    let updatedpname=req.body.pname
    
    

    cartModel.findOneAndUpdate({pname:updatedpname},{$set:{status:"Shipped"}},(err,result)=>{
        if(!err){
              res.send("Order Shipped");
            }
        else {
            res.send("Error "+err);
        }
    })
}

let updateCartItemsCancel=(req,res)=>{
    let updatedpname=req.body.pname
    
    

    cartModel.findOneAndUpdate({pname:updatedpname},{$set:{status:"Cancelled"}},(err,result)=>{
        if(!err){
              res.send("Order Cancelled");
            }
        else {
            res.send("Error generated "+err);
        }
    })
}

let viewCartItemsReport=(req,res)=>{
    cartModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

module.exports={storeUserDetails,getUserDetails,raiseTicket,getRaiseTickets,editUserProfile, addToCart,deleteFromCart, getCartItems,editFunds,addFunds, getFunds, updateIncorrectCount,updateIncorrectLock ,deleteTicket, unlockUser, updateCartItems, updateCartItemsCancel, viewCartItemsReport }