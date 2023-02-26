import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http:HttpClient) { }
  placeApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/place",data)
  }
  getAllPlacesApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/place")
  }
  getAllActivitiesApi():Observable<any>{
    return this.http.get("http://localhost:9909/activity")
  }
  deletePlaceApi(placeId:any):Observable<any>
  {
    return this.http.delete("http://localhost:9909/place/"+placeId)
  }
  getplaceByIdApi(placeid:any):Observable<any>{
    return this.http.get("http://localhost:9909/getplacebyid/"+placeid);
  }
  editPlaceApi(data:any):Observable<any>
  {
    return this.http.put("http://localhost:9909/place",data)
  }

}
