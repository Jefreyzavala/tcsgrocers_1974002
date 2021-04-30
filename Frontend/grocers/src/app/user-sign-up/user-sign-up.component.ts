import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/User"])
  }

  signUp(productRef:any){
    this.proServ.user_sign_up(productRef)
    alert("Record Added Successfully")
  }
}
