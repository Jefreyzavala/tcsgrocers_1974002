import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  selectItem(){
    this.router.navigate(["/selectItem"])
  }

  deleteItem(){
    this.router.navigate(["/deleteItem"])
  }

  viewItem(){
    this.router.navigate(["/checkItems"])
  }

  checkout(){
    this.router.navigate(["/checkoutItem"])
  }

  orderStatus(){
    this.router.navigate(["/orderStatus"])
  }

  editProfile(){
    this.router.navigate(["/editProfile"])
  }

  fund(){
    this.router.navigate(["/money"])
  }

  homePage(){
    this.router.navigate(["/User"])
  }
}
