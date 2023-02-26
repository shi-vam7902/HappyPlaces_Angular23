import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-listactivity',
  templateUrl: './listactivity.component.html',
  styleUrls: ['./listactivity.component.css']
})
export class ListactivityComponent implements OnInit {

  constructor(private activityservice:ActivityService,private toastr:ToastrService) { }
  activities: Array<any> = []

  ngOnInit(): void {
    this.activityservice.getAllActivitiesApi().subscribe(resp => {
      this.activities = resp.data;
      console.log(this.activities);
  })
  }
  deleteActivity(activityId:any)
  {
    this.toastr.success("Activity Deleted","Warning",{timeOut:3000})
    this.activityservice.deleteActivityApi(activityId).subscribe(resp=>{
      console.log(resp);
    })
  }


}
