import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './customer/home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AddPlacesComponent } from './vendor/adding/add-places/add-places.component';
import { AddbookingComponent } from './vendor/adding/addBookings/addbooking/addbooking.component';
import { AddactivitiesComponent } from './vendor/adding/addactivities/addactivities/addactivities.component';

import { LayoutComponent } from './admin/dash/layout/layout.component';
import { HeaderComponent } from './admin/dash/header/header.component';
import { FooterComponent } from './admin/dash/footer/footer.component';


import { SidebarComponent } from './admin/dash/sidebar/sidebar.component';
import { VDashBoardComponent } from './vendor/dash/DashBoard/dashboard/v-dash-board/v-dash-board.component';
import { EditactivityComponent } from './vendor/editing/editactivity/editactivity/editactivity.component';
import { EditbookingComponent } from './vendor/editing/editbooking/editbooking/editbooking.component';
import { EditplacesComponent } from './vendor/editing/editplace/editplaces/editplaces.component';

import { AddActivitesComponent } from './admin/adding/add-activites/add-activites.component';
import { AddFeedbackComponent } from './admin/adding/add-feedback/add-feedback.component';
import { AddBookingsComponent } from './admin/adding/add-bookings/add-bookings.component';
import { AddPostsComponent } from './admin/adding/add-posts/add-posts.component';
import { AddUsersComponent } from './admin/adding/add-users/add-users.component';
import { AddVendorsComponent } from './admin/adding/add-vendors/add-vendors.component';
import { BookingreportComponent } from './admin/bookingsreport/bookingreport/bookingreport.component';
import { ContentComponent } from './admin/dash/content/content.component';
import { DashboardComponent } from './admin/dash/dashboard/dashboard.component';
import { ToursComponent } from './customer/tours/tours.component';
import { EditfeedbackComponent } from './admin/editing/editfeedback/editfeedback.component';
import { EditplaceComponent } from './admin/editing/editplace/editplace.component';
import { EditpostComponent } from './admin/editing/editpost/editpost.component';
import { EdituserComponent } from './admin/editing/edituser/edituser.component';
import { EditvendorComponent } from './admin/editing/editvendor/editvendor.component';
import { ListactivityComponent } from './admin/listing/listactivity/listactivity.component';
import { ListbookingComponent } from './admin/listing/listbooking/listbooking.component';
import { ListfeedbackComponent } from './admin/listing/listfeedback/listfeedback.component';
import { ListplaceComponent } from './admin/listing/listplace/listplace.component';
import { ListpostComponent } from './admin/listing/listpost/listpost.component';
import { ListusersComponent } from './admin/listing/listusers/listusers.component';
import { ListvendorsComponent } from './admin/listing/listvendors/listvendors.component';
import { ReportsComponent } from './admin/reports/reports/reports.component';
import { LogoutComponent } from './logout/logout.component';
import { PlacesComponent } from './places/places.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgetpasswordComponent,
    AddPlacesComponent,
    AddbookingComponent,
    AddactivitiesComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    VDashBoardComponent,
    EditactivityComponent,
    EditbookingComponent,
    EditplacesComponent,
    AddActivitesComponent,
    AddFeedbackComponent,
    AddBookingsComponent,
    AddPostsComponent,
    AddUsersComponent,
    AddVendorsComponent,
    BookingreportComponent,
    ContentComponent,
    DashboardComponent,
    SidebarComponent,
    LayoutComponent,
    ToursComponent,
    EditfeedbackComponent,
    EditplaceComponent,
    EditpostComponent,
    EdituserComponent,
    EditvendorComponent,
    ListactivityComponent,
    ListbookingComponent,
    ListfeedbackComponent,
    ListplaceComponent,
    ListpostComponent,
    ListusersComponent,
    ListvendorsComponent,
    ReportsComponent,
    LogoutComponent,
    PlacesComponent,
    ResetPasswordComponent
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
