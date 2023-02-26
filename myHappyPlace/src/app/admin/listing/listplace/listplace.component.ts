import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-listplace',
  templateUrl: './listplace.component.html',
  styleUrls: ['./listplace.component.css']
})
export class ListplaceComponent implements OnInit {

  constructor(private placeService:PlacesService) { }
  places: Array<any> = []
  activity: Array<any> = []
  ngOnInit(): void {
    this.placeService.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);

    })
    this.placeService.getAllActivitiesApi().subscribe(resp=>{
      this.activity = resp.data;
      console.log(this.activity);

    })
  }
  deletePlace(placeId:any)
  {
    alert("delete" + placeId);
    this.placeService.deletePlaceApi(placeId).subscribe(resp=>{
      console.log(resp);

    })
  }


}
