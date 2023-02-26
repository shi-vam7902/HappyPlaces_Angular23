import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './customer/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddPlacesComponent } from './vendor/adding/add-places/add-places.component';
import { AddbookingComponent } from './vendor/adding/addBookings/addbooking/addbooking.component';
import { AddactivitiesComponent } from './vendor/adding/addactivities/addactivities/addactivities.component';

// import { DashboardComponent } from './vendor/dash/DashBoard/dashboard/dashboard.component';
import { VDashBoardComponent } from './vendor/dash/DashBoard/dashboard/v-dash-board/v-dash-board.component';
import { BookingreportComponent } from './admin/bookingsreport/bookingreport/bookingreport.component';
import { AddActivitesComponent } from './admin/adding/add-activites/add-activites.component';
const routes: Routes = [
  
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  // {path:"signup",component:SignupComponent},
  {path:"cutomer/home",component:HomeComponent},
  {path:"vendor/add",component:AddPlacesComponent},
  {path:"vendor/book",component:AddbookingComponent},
  {path:"vendor/activity",component:AddactivitiesComponent},
  {path:"vendor/dash",component:VDashBoardComponent},
  {path:"admin/report",component:BookingreportComponent},
  //add-activity
  {path:"admin/add-activity",component:AddActivitesComponent}
  
  // {path:"vendor/add",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
