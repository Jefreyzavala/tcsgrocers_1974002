import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponentComponent } from './add-employee-component/add-employee-component.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminGenerateComponentComponent } from './admin-generate-component/admin-generate-component.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewRequestComponent } from './admin-view-request/admin-view-request.component';
import { DeleteEmployeeComponentComponent } from './delete-employee-component/delete-employee-component.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { EmployeeFirstTimeChangePasswordComponent } from './employee-first-time-change-password/employee-first-time-change-password.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUnlockUsersComponent } from './employee-unlock-users/employee-unlock-users.component';
import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status/employee-update-order-status.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCheckoutItemComponent } from './user-checkout-item/user-checkout-item.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDeleteItemComponent } from './user-delete-item/user-delete-item.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundComponent } from './user-fund/user-fund.component';
import { UserOrderstatusComponent } from './user-orderstatus/user-orderstatus.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';
import { UserSelectItemComponent } from './user-select-item/user-select-item.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserViewItemComponent } from './user-view-item/user-view-item.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"\admin",component:AdminPanelComponent},
  {path:"\admin_dashboard",component:AdminDashboardComponent},
  {path:"\User",component:UserComponent},
  {path:"\employee",component:EmployeeComponent},
  {path:"\addProduct",component:AdminAddProductComponent},
  {path:"\deleteProduct",component:AdminDeleteProductComponent},
  {path:"\productUpdate",component:AdminUpdateProductComponent},
  {path:"\employeeViewRequest",component:AdminViewRequestComponent},
  { path:"\add-emplyee", component:AddEmployeeComponentComponent},
  { path:"\delete-emp", component:DeleteEmployeeComponentComponent},
  {path:"\viewEmployeeRequest",component:AdminViewRequestComponent},
  {path:"\employeeDashboard",component:EmployeeDashboardComponent},
  {path:"\employeeSendRequest",component:EmployeeSendRequestComponent},
  {path:"\employeeEditProfile",component:EmployeeEditProfileComponent},
  {path:"\employeeUpdateOrderStatus",component:EmployeeUpdateOrderStatusComponent},
  {path:"\employeeUnlockUsers",component:EmployeeUnlockUsersComponent},
  {path:"\employeeChangePassword",component:EmployeeFirstTimeChangePasswordComponent},
  {path:"\dashboard",component:UserDashboardComponent},   //user dashboard
  {path:"\signUpUser",component:UserSignUpComponent},
  {path:"\a",component:UserRaiseTicketComponent},    //user raise ticket
  {path:"\selectItem",component:UserSelectItemComponent},
  {path:"\deleteItem",component:UserDeleteItemComponent},
  {path:"\checkItems",component:UserViewItemComponent},  //view user cart items
  {path:"\checkoutItem",component:UserCheckoutItemComponent},
  {path:"\orderStatus",component:UserOrderstatusComponent},
  {path:"\editProfile",component:UserEditProfileComponent},
  {path:"\money",component:UserFundComponent},
  {path:"\generateProductReport",component:AdminGenerateComponentComponent},
  {path:"**",component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
