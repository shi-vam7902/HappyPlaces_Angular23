import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.css']
})
export class ListfeedbackComponent implements OnInit {

  
  constructor(private feedbackservice:FeedbackService,private router:Router,private vendorservice:VendorService,private userservice:UserService) { }
  feedbacks: Array<any> = []
  vendors: Array<any> = []
  users: Array<any> = []
  // userid: Array<any> = []
  // element=""
  // 6381f7558fcb6b51ae28f3e3
  ngOnInit(): void {
    this.feedbackservice.getAllFeedbacksApi().subscribe(resp=>{
      this.feedbacks=resp.data
      // for (let index = 0; index < this.feedbacks.length; index++) {
      //   var element = this.feedbacks[index].business.user;
      //   if (element == this.userid) {
      //     element ="Kenny Rude";
      //   }
      //   else{
      //     element = "Siddh Shah";

      //   }
      // }
      console.log(this.feedbacks);
    })
    this.vendorservice.getAllVendorsApi().subscribe(resp =>{
      this.vendors=resp.data;
      console.log(this.vendors);

    })
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);

      // for (let index = 0; index < this.users.length; index++) {
      //   var element = this.users[index]._id;
      //   this.userid=element
      //   console.log(this.userid);
      // }
    })
  }


}
