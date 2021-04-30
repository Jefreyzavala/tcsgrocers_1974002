import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  msg?:string
  product?:[]

  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  checkData(loginRef:any){
    this.proServ.checkEmployeeCredentials().subscribe(res=>{
      console.log(res)
      this.product=res
      
      var count=0
      var check=0
      this.product.forEach(function (item) {
        
        if(loginRef.email_id==item["email_id"] && loginRef.password==item["password"]){
          if(item["status"]=="active"){
            check+=1
            
          }
          count+=1
        }
      })
      if(count==0){
        this.msg="Incorrect Credentials"
        alert(this.msg);
      }
      else if(count>0 && check>0){
        this.router.navigate(["/employeeChangePassword"])
      }
      else{
        this.router.navigate(["/employeeDashboard"])
      }
    }
    )}    
  
  
  homePage(){
    this.router.navigate(["/"])
  }
}
