import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {
msg?:string
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  updateProfile(productRef:any){
    console.log(productRef)
    this.proServ.editUserProfile(productRef).subscribe(res=>{
      this.msg=res
      alert(this.msg)
    })
  }
  

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }

}
