import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewRequestComponent } from './admin-view-request/admin-view-request.component';
import { AddEmployeeComponentComponent } from './add-employee-component/add-employee-component.component';
import { DeleteEmployeeComponentComponent } from './delete-employee-component/delete-employee-component.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status/employee-update-order-status.component';
import { EmployeeUnlockUsersComponent } from './employee-unlock-users/employee-unlock-users.component';
import { EmployeeFirstTimeChangePasswordComponent } from './employee-first-time-change-password/employee-first-time-change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';
import { UserSelectItemComponent } from './user-select-item/user-select-item.component';
import { UserDeleteItemComponent } from './user-delete-item/user-delete-item.component';
import { UserViewItemComponent } from './user-view-item/user-view-item.component';
import { UserCheckoutItemComponent } from './user-checkout-item/user-checkout-item.component';
import { UserOrderstatusComponent } from './user-orderstatus/user-orderstatus.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundComponent } from './user-fund/user-fund.component';
import { AdminGenerateComponentComponent } from './admin-generate-component/admin-generate-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    HomePageComponent,
    AdminDashboardComponent,
    AdminPanelComponent,
    AdminAddProductComponent,
    AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    AdminViewRequestComponent,
    AddEmployeeComponentComponent,
    DeleteEmployeeComponentComponent,
    EmployeeDashboardComponent,
    EmployeeSendRequestComponent,
    EmployeeEditProfileComponent,
    EmployeeUpdateOrderStatusComponent,
    EmployeeUnlockUsersComponent,
    EmployeeFirstTimeChangePasswordComponent,
    UserDashboardComponent,
    UserSignUpComponent,
    UserRaiseTicketComponent,
    UserSelectItemComponent,
    UserDeleteItemComponent,
    UserViewItemComponent,
    UserCheckoutItemComponent,
    UserOrderstatusComponent,
    UserEditProfileComponent,
    UserFundComponent,
    AdminGenerateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
