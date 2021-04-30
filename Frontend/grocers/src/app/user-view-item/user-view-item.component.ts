import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-view-item',
  templateUrl: './user-view-item.component.html',
  styleUrls: ['./user-view-item.component.css']
})
export class UserViewItemComponent implements OnInit {
  product?:[]
  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.viewCartItems().subscribe(res=>this.product=res)
    console.log(this.product)
  }

  adminHomePage(){
    this.router.navigate(["/dashboard"])
  }
}
