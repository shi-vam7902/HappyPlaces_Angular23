import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent implements OnInit {
  businessName:String=""
  businessType:String=""
  businessAddress:String=""
  userId:String=""
  consumerContact:Number=0
  emailAddress:String=""
  places:Array<any>=[]

  constructor(private router:Router,private placeservice:BusinessService ) { }

  ngOnInit(): void {
    this.placeservice.getAllBusinessApi().subscribe(res=>{
      this.places = res.data
      console.log(this.places);
    })
  }

}
