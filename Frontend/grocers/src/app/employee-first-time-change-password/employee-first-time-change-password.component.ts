import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee-first-time-change-password',
  templateUrl: './employee-first-time-change-password.component.html',
  styleUrls: ['./employee-first-time-change-password.component.css']
})
export class EmployeeFirstTimeChangePasswordComponent implements OnInit {
  msg?:string
  product?:[]
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/employeeDashboard"])
  }

  editProfile(productRef:any){
    console.log(productRef)
    this.proServ.editStatus(productRef).subscribe(res=>{
      this.msg=res
      alert(this.msg)

      this.router.navigate(["/employeeDashboard"])
    })
  }

}
