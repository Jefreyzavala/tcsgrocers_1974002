let employeeModel=require("../model/employee.model.js")
let adminEmployeeModel=require("../model/admin_employee.model.js")

let storeRequest=(req,res)=>{
    let employeeRequest=new employeeModel({
        // _id:req.body.pid,
        request:req.body.request
    })

    employeeRequest.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Request stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}


let getRequest=(req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })

}


let addempdetails=(req,res)=>{
    let employeeRequest=new adminEmployeeModel({
        // _id:req.body.pid,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email_id:req.body.email_id,
        password:req.body.password,
        status:req.body.status
    })

    employeeRequest.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Employee added successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}



let deleteempbyemailid=(req,res)=>{
    let email_id=req.params.email_id
    adminEmployeeModel.deleteOne({email_id:email_id},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Employee deleted Successfully")
            }else{
                res.send("No such Employee available")
            }
        }else{
            res.send("Error generated" + err)
        }
    })
}


let checkCredentials=(req,res)=>{
    adminEmployeeModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let editEmployeeProfile=(req,res)=>{
    let emailid=req.body.email_id
    let updatedpassword=req.body.password
    

    adminEmployeeModel.updateMany({email_id:emailid},{$set:{password:updatedpassword}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("No such Product");
            }
        }else {
            res.send("Error");
        }
    })
}

let getEmpDetails=(req,res)=>{
    adminEmployeeModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let editEmployeeStatus=(req,res)=>{
    let emailid=req.body.email_id
    let updatedpassword=req.body.password
    let updatestatus="inactive"

    adminEmployeeModel.updateMany({email_id:emailid},{$set:{password:updatedpassword,status:updatestatus}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("No such Product");
            }
        }else {
            res.send("Error");
        }
    })
}

module.exports={storeRequest,getRequest,addempdetails,deleteempbyemailid,checkCredentials,editEmployeeProfile,getEmpDetails, editEmployeeStatus}

