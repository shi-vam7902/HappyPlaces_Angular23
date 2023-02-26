import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VbookingserviceService } from "src/app/services/vbookingservice.service";

@Component({
  selector: "app-addbooking",
  templateUrl: "./addbooking.component.html",
  styleUrls: ["./addbooking.component.css"],
})
export class AddbookingComponent implements OnInit {
  users: Array<any> = [];
  places: Array<any> = [];
  activities: Array<any> = [];
  constructor(
    private bookingservice: VbookingserviceService,
    private router: Router
  ) {}

  user = "";
  place = "";
  act = "";
  status = "";
  noOfPerson = 0;
  dateOfBooking = "";

  ngOnInit(): void {
    this.bookingservice.getAllUsersApi().subscribe((resp) => {
      this.users = resp.data;
      console.log(this.users);
    });
    this.bookingservice.getAllPlacesApi().subscribe((resp) => {
      this.places = resp.data;
      console.log(this.places);
    });
    this.bookingservice.getAllActivitiesApi().subscribe((resp) => {
      this.activities = resp.data;
      console.log(this.activities);
    });
  }

  addbooking() {
    let data = {
      user: this.user,
      place: this.place,
      act: this.act,
      status: this.status,
      noOfPerson: this.noOfPerson,
      dateOfBooking: this.dateOfBooking,
    };

    this.bookingservice.BookingApi(data).subscribe((res) => {
      console.log("Booking response ");
      console.log(res);
    });
  }
}
