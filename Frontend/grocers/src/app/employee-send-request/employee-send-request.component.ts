import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.css']
})
export class EmployeeSendRequestComponent implements OnInit {

  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  sendRequest(loginRef:any){
    this.proServ.employeeSendRequest(loginRef)
    alert("Record Added Successfully")
  }

  homePage(){
    this.router.navigate(["/employeeDashboard"])
  }
}
