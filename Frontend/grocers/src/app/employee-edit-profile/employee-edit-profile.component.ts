import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {
  msg?:string
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/employeeDashboard"])
  }

  editProfile(productRef:any){
    console.log(productRef)
    this.proServ.editProfile(productRef).subscribe(res=>{
      this.msg=res
      alert(this.msg)
    })
  }

}
