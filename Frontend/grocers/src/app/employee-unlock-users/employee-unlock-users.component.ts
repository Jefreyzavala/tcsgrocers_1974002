import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-employee-unlock-users',
  templateUrl: './employee-unlock-users.component.html',
  styleUrls: ['./employee-unlock-users.component.css']
})
export class EmployeeUnlockUsersComponent implements OnInit {
  product?:[]
  // email?:String

  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.getraiseTickets().subscribe(res=>this.product=res)
    console.log(this.product)
  }

  deleteTicket(event:any){
    console.log(event.target.id)
    this.proServ.deleteUserTicket(event.target.id).subscribe((res:string)=>{
      alert(res)
    })
  }

  unlockUser(event:any){
    var email:any
    email=event.target.id
    console.log({email})
    this.proServ.unlockUsers({email}).subscribe(res=>{
      alert(res)
    })
  }
  

  adminHomePage(){
    this.router.navigate(["/employeeDashboard"])
  }

}
