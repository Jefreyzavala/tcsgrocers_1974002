import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  homePage(){
    this.router.navigate(["/employee"])
  }

  sendRequest(){
    this.router.navigate(["/employeeSendRequest"])
  }

  updateOrderStatus(){
    this.router.navigate(["/employeeUpdateOrderStatus"])
  }

  unlockUsers(){
    this.router.navigate(["/employeeUnlockUsers"])
  }

  editProfile(){
    this.router.navigate(["/employeeEditProfile"])
  }

  
}
