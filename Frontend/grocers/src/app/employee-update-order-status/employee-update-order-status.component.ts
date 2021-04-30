import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee-update-order-status',
  templateUrl: './employee-update-order-status.component.html',
  styleUrls: ['./employee-update-order-status.component.css']
})
export class EmployeeUpdateOrderStatusComponent implements OnInit {
  product?:[]
  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.viewCartItems().subscribe(res=>this.product=res)
  }

  adminHomePage(){
    this.router.navigate(["/employeeDashboard"])
  }

  shipOrder(event){
    let pname=""
    pname=event.target.id
    this.proServ.updateCartItems({pname}).subscribe(res=>{
      alert(res)
    })
  }

  cancelOrder(event){
    let pname=""
    pname=event.target.id
    this.proServ.updateCartItemsCancel({pname}).subscribe(res=>{
      alert(res)
    })
    // this.proServ.editFunds({price}).subscribe(res=>{
    //   alert(res)
    // })
  }
}
