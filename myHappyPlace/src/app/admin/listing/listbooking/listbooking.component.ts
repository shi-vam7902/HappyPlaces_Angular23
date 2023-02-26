import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-listbooking',
  templateUrl: './listbooking.component.html',
  styleUrls: ['./listbooking.component.css']
})
export class ListbookingComponent implements OnInit {

  constructor(private bookingservice:BookingService) { }
  bookings: Array<any> = []
  users: Array<any> = []
  places: Array<any> = []
  activity: Array<any> = []
  dtOptions:any={}

  ngOnInit(): void {
    this.bookingservice.getAllBookingsApi().subscribe(resp => {
      this.bookings = resp.data;
      console.log(this.bookings);
      this.dtOptions = {

        search: {
          return: true,
        },
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        export:true
      }

  })
  this.bookingservice.getAllUsersApi().subscribe(resp => {
    this.users = resp.data;
    console.log(this.users);
  })
  this.bookingservice.getAllPlacesApi().subscribe(resp => {
    this.places = resp.data;
    console.log(this.places);
  })
  this.bookingservice.getAllActivitiesApi().subscribe(resp => {
    this.activity = resp.data;
    console.log(this.activity);
  })
  }
  deleteBooking(bookingId:any)
  {
    alert("delete" + bookingId);
    this.bookingservice.deleteBookingApi(bookingId).subscribe(resp=>{
      console.log(resp);

    })
  }



}
