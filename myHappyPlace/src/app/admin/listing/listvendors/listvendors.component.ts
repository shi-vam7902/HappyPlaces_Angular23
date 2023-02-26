import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-listvendors',
  templateUrl: './listvendors.component.html',
  styleUrls: ['./listvendors.component.css']
})
export class ListvendorsComponent implements OnInit {

  vendors: Array<any> = []
  users: Array<any> = []
  constructor(private vendorservice:VendorService,private userservice:UserService) { }

  ngOnInit(): void {
    this.vendorservice.getAllVendorsApi().subscribe(resp =>{
      this.vendors=resp.data;
      console.log(this.vendors);

    })
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
  }

  deleteVendor(businessId:any)
  {
    alert("delete" + businessId);
    this.vendorservice.deleteVendorApi(businessId).subscribe(resp=>{
      console.log(resp);

    })
  }


}
