import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-checkout-item',
  templateUrl: './user-checkout-item.component.html',
  styleUrls: ['./user-checkout-item.component.css']
})
export class UserCheckoutItemComponent implements OnInit {
  bal?:any
  total_price?:any
  product?:[]
  

  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.viewCart().subscribe(res=>{
      let total = 0;
      for (let obj of res){
         total +=obj.price;
      }
      this.total_price = total;
    })

    this.proServ.getStoredFunds().subscribe(res=>{
      let total = 0;
      for (let obj of res){
         total =obj.amount;
      }
      this.bal = total;
    })

    this.proServ.viewCartItems().subscribe(res=>{this.product=res
    })

  }

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }

  checkout(){
    if(this.bal>=this.total_price){
      var amount=0
      amount=this.bal-this.total_price

      this.proServ.addFunds({amount})
      
      
      this.router.navigate(["/orderStatus"])
    }
    else{
      alert("Insufficient Funds")
    }
    
  }
}
