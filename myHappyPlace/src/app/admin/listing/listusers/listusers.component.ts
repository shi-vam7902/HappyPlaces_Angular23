import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService:UserService) { }
  users: Array<any> = []
  userType: Array<any> = []
  ngOnInit(): void {
    this.userService.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
    this.userService.getAllUserTypeApi().subscribe(resp=>{
      this.userType = resp.data;
      console.log(this.userType);

    })
  }
  deleteUser(userId:any)
  {
    alert("delete" + userId);
    this.userService.deleteUserApi(userId).subscribe(resp=>{
      console.log(resp);

    })
  }

}
