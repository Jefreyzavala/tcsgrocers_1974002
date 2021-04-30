import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';
import dayjs from 'dayjs'
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween)
dayjs().format()

@Component({
  selector: 'app-admin-generate-component',
  templateUrl: './admin-generate-component.component.html',
  styleUrls: ['./admin-generate-component.component.css']
})
export class AdminGenerateComponentComponent implements OnInit {
  product?:[] 
  ans?:any
  final?:any
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  storeDate(productRef:any){
    console.log(productRef)
    this.proServ.viewCartItemsReport().subscribe(res=>{
      this.ans = res.filter(obj =>dayjs(obj["date"]).isBetween(productRef.starting_date, productRef.closing_date) )           
      
    })
  }

  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }
}
