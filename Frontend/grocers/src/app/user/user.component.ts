import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  product?:[]
  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  checkData(loginRef:any){
    this.proServ.getUserDetails().subscribe(res=>{
      console.log(res)
      this.product=res
      var count=0
      var check_incorrect=0
      var check_incorrect1=0
      var flag=true
      var email=""

      this.product.forEach(function (item) {
        if(item["lock"]==0 && loginRef.email==item["email"] && loginRef.password==item["password"]){
            count+=1                 
          }
        else if (item["lock"]==0 && (loginRef.email==item["email"] || loginRef.password==item["password"]) && item["count_incorrect"]!=3){
          check_incorrect+=1
          email=item["email"]
          
        }
        else if (item["lock"]==0 && (loginRef.email==item["email"] || loginRef.password==item["password"]) && item["count_incorrect"]==3){
          check_incorrect1+=1
          email=item["email"]
          
        }
        else if(item["lock"]==1 && loginRef.email==item["email"]){
          flag=false
        }
        
        
        
      })

      if(count!=0 && flag==true && check_incorrect==0 && check_incorrect1==0){
        this.router.navigate(["/dashboard"]) 
      }
      else if(count==0 && flag==true && check_incorrect!=0 && check_incorrect1==0){
        console.log({email})
        this.proServ.updateIncorrectCount({email}).subscribe(res=>{
          console.log(res)
        })
        alert("Incorrect Credentials")
      }
      else if(count==0 && flag==true && check_incorrect==0 && check_incorrect1!=0){
        this.proServ.updateIncorrectCountlock({email}).subscribe(res=>{
          console.log(res)
        })
        alert("Account is locked")
      }
      else if(count==0 && flag!=true && check_incorrect==0 && check_incorrect1!=0){
        alert("Please raise ticket")
      }
     
      
    }
    )}   
  

  signUp(){
    this.router.navigate(["/signUpUser"])
  }

  homePage(){
    this.router.navigate(["/"])
  }

  raiseTicket(){
    this.router.navigate(["/a"])
  }
}
