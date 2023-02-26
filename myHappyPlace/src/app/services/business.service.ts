import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BusinessService {
  constructor(private http: HttpClient) {}
//adding business
  businessApi(data: any): Observable<any> {
    return this.http.post("http://localhost:9909/business", data);
  }
  //getting all business
  getAllBusinessApi():Observable<any>{
    return this.http.get("http://localhost:9909/business")
  }
  //getBusinessById
  getAllBusinessByIdApi(businessid:any):Observable<any>{
    return this.http.get("http://localhost:9909/business/:businessId"+businessid)
  }
  //updateBusiness
  editBusiness(data:any):Observable<any>{
    return this.http.put("http://localhost:9909/business/:businessId",data)
  }
  //deleteBusiness
  DeleteBusinessById(businessId:any):Observable<any>{
    return this.http.delete("http://localhost:9909/business/:businessId",businessId)
  }
}
