import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-user-raise-ticket',
  templateUrl: './user-raise-ticket.component.html',
  styleUrls: ['./user-raise-ticket.component.css']
})
export class UserRaiseTicketComponent implements OnInit {

  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  raiseTicket(loginRef:any){
    this.proServ.employeeRaiseTicket(loginRef)
    alert("Record Added Successfully")
  }

  homePage(){
    this.router.navigate(["/User"])
  }

}
