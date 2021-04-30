import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-orderstatus',
  templateUrl: './user-orderstatus.component.html',
  styleUrls: ['./user-orderstatus.component.css']
})
export class UserOrderstatusComponent implements OnInit {
  product?:[]
  bal?:any =0 
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.getStoredFunds().subscribe(res=>{
      let total = 0;
      for (let obj of res){
         total =obj.amount;
      }
      this.bal = total;
    })
    this.bal
  

    this.proServ.viewCartItems().subscribe(res=>this.product=res)
  }

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }

}
