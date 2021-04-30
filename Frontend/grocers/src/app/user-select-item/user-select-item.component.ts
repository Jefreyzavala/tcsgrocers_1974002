import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-select-item',
  templateUrl: './user-select-item.component.html',
  styleUrls: ['./user-select-item.component.css']
})
export class UserSelectItemComponent implements OnInit {
  product?:[]
  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.getProductDetails().subscribe(res=>this.product=res)
  }

  cartSave(event: any){
    console.log(this.product)
    console.log(event.target.id)
    let [add_product]=this.product.filter(prod=>prod["pname"]==event.target.id)
    console.log(add_product)
    this.proServ.addToCart(add_product)
    alert("Record Added Successfully")
  }

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }

}
