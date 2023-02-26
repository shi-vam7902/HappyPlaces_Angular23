import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AddactivityService } from 'src/app/services/addactivity.service';

@Component({
  selector: 'app-addactivities',
  templateUrl: './addactivities.component.html',
  styleUrls: ['./addactivities.component.css']
})
export class AddactivitiesComponent implements OnInit {

  constructor(private activityservice:AddactivityService,private router:Router,private Http:HttpClient) { }
  actType=""
  ngOnInit(): void {
  }
  addActivity(){
    let data= {
      "actType":this.actType
    }
    this.activityservice.activityApi(data).subscribe(res=>{
      console.log("api response ");
      console.log(res);
   });
  //  this.send().success("Activity Added..","",{timeOut:3000})
   this.router.navigateByUrl("/admin/listactivities");
  }
}
