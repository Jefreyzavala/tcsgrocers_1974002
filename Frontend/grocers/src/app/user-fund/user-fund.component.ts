import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-fund',
  templateUrl: './user-fund.component.html',
  styleUrls: ['./user-fund.component.css']
})
export class UserFundComponent implements OnInit {
  bal?:any =0 
  temp?:any
  product?:[]
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
  }
  
  addFund(productRef:any){
    

    console.log(productRef.amount)
    this.bal = this.bal ? this.bal : 0;
    this.bal+=parseInt(productRef.amount )
    
    productRef.amount=this.bal
    this.proServ.addFunds(productRef)
    alert("Fund Added Successfully")

  }


  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }
}
