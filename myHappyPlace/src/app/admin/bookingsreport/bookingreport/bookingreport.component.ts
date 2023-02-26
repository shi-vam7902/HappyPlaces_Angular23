import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-bookingreport',
  templateUrl: './bookingreport.component.html',
  styleUrls: ['./bookingreport.component.css']
})
export class BookingreportComponent implements OnInit {
  statuses: Array<any> = []
  bookings: Array<any> = []
  users: Array<any> = []
  places: Array<any> = []
  activity: Array<any> = []
  status="-1"
  dateOfBooking=""
  noOfPerson=0
  place=""
  act=""
  dtOptions:any={}
  
  constructor(private bookingservice:BookingService,private toastservice:ToastrService) {
     // this.bookingservice.getAllUsersApi().subscribe(resp => {
    //   this.users = resp.data;
    //   console.log(this.users);
    // })
    // this.bookingservice.getAllPlacesApi().subscribe(resp => {
    //   this.places = resp.data;
    //   console.log(this.places);
    // })
    // this.bookingservice.getAllActivitiesApi().subscribe(resp => {
    //   this.activity = resp.data;
    //   console.log(this.activity);
    // })
    this.bookingservice.getAllStatusesApi().subscribe(resp => {
      this.statuses = resp.data;
      console.log(this.statuses);
    })
   }

  ngOnInit(): void {
  }
}
