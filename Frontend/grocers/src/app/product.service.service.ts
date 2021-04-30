import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './model.cart';
import { Funds } from './model.funds';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http:HttpClient) { }

  storeProductDetails(productRef:any){
    this.http.post("http://localhost:9090/admin_dashboard/storeProductDetails/",productRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  deleteProductByName(pname:any):any{
    return this.http.delete("http://localhost:9090/admin_dashboard/deleteProductByName/"+pname,{responseType:'text'})
  }

  updateProductDetails(productRef:any){
    return this.http.put("http://localhost:9090/admin_dashboard/updateProductDetails",productRef,{responseType:'text'})    
  }

  retrieveViewRequests():Observable<[]>{
    //change array of table if required and also change the API if it works
    return this.http.get<[]>("http://localhost:9090/employee/viewRequest/")
  }

  add_emp_details(empRef:any){
    this.http.post("http://localhost:9090/employee/add-emp-details/",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  get_emp_details():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/employee/checkCredentials/")
  }

  deleteEmp(email_id:any):any{
    return this.http.delete("http://localhost:9090/employee/delete_emp_by_email/"+email_id,{responseType:'text'})
  }

  checkEmployeeCredentials():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/employee/checkCredentials/")
  }

  employeeSendRequest(empRef:any){
    this.http.post("http://localhost:9090/employee/storeRequest/",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }


  editProfile(productRef:any){
    return this.http.put("http://localhost:9090/employee/editProfile",productRef,{responseType:'text'})    
  }

  editStatus(productRef:any){
    return this.http.put("http://localhost:9090/employee/editEmpStatus/",productRef,{responseType:'text'})    
  }

  getUserDetails():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/user/signin")   
  }

  employeeRaiseTicket(empRef:any){
    this.http.post("http://localhost:9090/user/raiseTicket",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  getraiseTickets():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/user/getraiseTicket")   
  }

  user_sign_up(empRef:any){
    this.http.post("http://localhost:9090/user/signup",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  editUserProfile(productRef:any){
    return this.http.put("http://localhost:9090/user/editUserProfile",productRef,{responseType:'text'})    
  }

  getProductDetails():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/admin_dashboard/getProductDetails")   
  }

  addToCart(empRef:any){
    this.http.post("http://localhost:9090/user/addToCart",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  deleteFromCart(pname:any):any{
    return this.http.delete("http://localhost:9090/user/deleteFromCart/"+pname,{responseType:'text'})
  }

  viewCartItems():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/user/viewCartItems/")
  }

  viewCart():Observable<[Cart]>{
    return this.http.get<[Cart]>("http://localhost:9090/user/viewCartItems/")
  }

  addFunds(empRef:any){
    this.http.post("http://localhost:9090/user/addFunds",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  getFunds():Observable<[]>{
    return this.http.get<[]>("http://localhost:9090/user/getFunds")   
  }

  getStoredFunds():Observable<[Funds]>{
    return this.http.get<[Funds]>("http://localhost:9090/user/getFunds")   
  }

  deleteRequest(request:any):any{
    return this.http.delete("http://localhost:9090/admin_dashboard/deleteRequest/"+request,{responseType:'text'})
  }

  updateIncorrectCount(productRef:any){
    return this.http.put("http://localhost:9090/user/updateIncorrectCount",productRef,{responseType:'text'})    
  }
  
  updateIncorrectCountlock(productRef:any){
    return this.http.put("http://localhost:9090/user/updateIncorrectlock",productRef,{responseType:'text'})    
  }

  deleteUserTicket(email:any):any{
    return this.http.delete("http://localhost:9090/user/deleteTicket/"+email,{responseType:'text'})
  }

  unlockUsers(email:any){
    return this.http.put("http://localhost:9090/user/unlockUser",email,{responseType:'text'})    
  }

  
  updateUsersFunds(empRef:any){
    this.http.post("http://localhost:9090/user/updateUsersFunds/",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  updateCartItems(pname:any){
    return this.http.put("http://localhost:9090/user/updateCartItems",pname,{responseType:'text'})
  }
  updateCartItemsCancel(pname:any){
    return this.http.put("http://localhost:9090/user/updateCartItemsCancel",pname,{responseType:'text'})
  }

  viewCartItemsReport():Observable<[Cart]>{
    return this.http.get<[Cart]>("http://localhost:9090/user/viewCartItemsReport/")
  }

  editFunds(productRef:any){
    return this.http.put("http://localhost:9090/user/editFunds",productRef,{responseType:'text'})    
  }
}
