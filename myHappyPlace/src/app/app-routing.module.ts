import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//admin imports
import { AddPlacesComponent } from './admin/adding/add-places/add-places.component';
import { AddActivitesComponent } from './admin/adding/add-activites/add-activites.component';
import { AddBookingsComponent } from './admin/adding/add-bookings/add-bookings.component';
import { AddFeedbackComponent } from './admin/adding/add-feedback/add-feedback.component';
import { AddPostsComponent } from './admin/adding/add-posts/add-posts.component';
import { AddUsersComponent } from './admin/adding/add-users/add-users.component';
import { AddVendorsComponent } from './admin/adding/add-vendors/add-vendors.component';
import { DashboardComponent } from './admin/dash/dashboard/dashboard.component';
import { EditactivityComponent } from './admin/editing/editactivity/editactivity.component';
import { EditbookingComponent } from './admin/editing/editbooking/editbooking.component';
import { EditplaceComponent } from './admin/editing/editplace/editplace.component'; 
import { EditpostComponent } from './admin/editing/editpost/editpost.component';
import { EdituserComponent } from './admin/editing/edituser/edituser.component';
import { EditvendorComponent } from './admin/editing/editvendor/editvendor.component';
import { ListplaceComponent } from './admin/listing/listplace/listplace.component';
import { ListactivityComponent } from './admin/listing/listactivity/listactivity.component';
import { ListbookingComponent } from './admin/listing/listbooking/listbooking.component';
import { ListusersComponent } from './admin/listing/listusers/listusers.component';
import { ListfeedbackComponent } from './admin/listing/listfeedback/listfeedback.component';
import { ListvendorsComponent } from './admin/listing/listvendors/listvendors.component';
import { ListpostComponent } from './admin/listing/listpost/listpost.component';
import { ReportsComponent } from './admin/reports/reports.component';
//comman
import { HomeComponent } from './customer/home/home.component';
import { ToursComponent } from './customer/tours/tours.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlacesComponent } from './places/places.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';
import { EditfeedbackComponent } from './admin/editing/editfeedback/editfeedback.component';
import { BookingreportComponent } from './admin/bookingsreport/bookingreport/bookingreport.component';
//vendor

const routes: Routes = [
  
  // {path:"admin/add-activity",component:AddActivitesComponent}
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"logout",component:LogoutComponent},
  
  {path:"customer/home",component:HomeComponent},
  {path:"customer/tours",component:ToursComponent},
  {path:"places",component:PlacesComponent},
  
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/addplaces",component:AddPlacesComponent},
  {path:"admin/listplaces",component:ListplaceComponent},
  {path:"admin/editplace/:placeis",component:EditplaceComponent},
  
  {path:"admin/adduser",component:AddUsersComponent},
  {path:"admin/listusers",component:ListusersComponent},
  {path:"admim/edituser/:userid",component:EdituserComponent},
  
  {path:"admin/addbooking",component:AddBookingsComponent},
  {path:"admin/listbookings",component:ListbookingComponent},
  {path:"admim/editbooking/:bookingid",component:EditbookingComponent},
  
  {path:"admin/addplace",component:AddPlacesComponent},
  {path:"admin/listplaces",component:ListplaceComponent},
  {path:"admim/editplace/:placeid",component:EditplaceComponent},

  {path:"admin/addactivity",component:AddActivitesComponent},
  {path:"admin/listactivity",component:ListactivityComponent},
  {path:"admim/editplace/:activityid",component:EditactivityComponent},

  {path:"admin/addfeedback",component:AddFeedbackComponent},
  {path:"admin/listfeedbacks",component:ListfeedbackComponent},
  {path:"admim/editfeedback/:feedbackid",component:EditfeedbackComponent},

  {path:"admin/addpost",component:AddPostsComponent},
  {path:"admin/listposts",component:ListpostComponent},
  {path:"admim/editpost/:postid",component:EditpostComponent},

  {path:"admin/addvendor",component:AddVendorsComponent},
  {path:"admin/listvendors",component:ListvendorsComponent},
  {path:"admim/editvendor/:vendorid",component:EditvendorComponent},

  {path:"admin/reports",component:ReportsComponent},
  {path:"admim/bookingreports",component:BookingreportComponent},

  {path:"/",component:LoginComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
