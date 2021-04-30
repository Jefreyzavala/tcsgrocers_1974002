import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-delete-item',
  templateUrl: './user-delete-item.component.html',
  styleUrls: ['./user-delete-item.component.css']
})
export class UserDeleteItemComponent implements OnInit {
  product?:[]
  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.getProductDetails().subscribe(res=>this.product=res)
  }

  cartDelete(event: any){
    console.log(this.product)
    console.log(event.target.id)
    let [add_product]=this.product.filter(prod=>prod["pname"]==event.target.id)
    console.log(add_product)

    this.proServ.deleteFromCart(event.target.id).subscribe((res:string)=>{
      console.log(res)
      alert(res)
    })
  }

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }
}
