import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router,private vendorservice:VendorService,private feedbackservice:FeedbackService) { }
  users:Array<any> = []
   businessArray:Array<any>= []
  //  vendors:Array<any> = []
  user=""
  business=""
  businessStars=0
  comment=""
  isVisible=""

  ngOnInit(): void {
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      this.users=this.users.filter(t=>t.userType.userTypeName=="Customer")
      // this.businessArray = resp.data;
      // this.businessArray= this.businessArray.filter(t=>t.userType.userTypeName == "Vendor")
      // console.log(this.users);
    })
    this.vendorservice.getAllVendorsApi().subscribe(resp =>{
      this.businessArray=resp.data;
      console.log(this.businessArray);

    })
  }

  addFeedback()
  {
    let data={
      "user":this.user,
      "business":this.business,
      "businessStars":this.businessStars,
      "comment":this.comment,
      "isVisible":this.isVisible
    }
    this.feedbackservice.FeedbackApi(data).subscribe(resp=>{
      console.log(resp);
    })
  }


}
