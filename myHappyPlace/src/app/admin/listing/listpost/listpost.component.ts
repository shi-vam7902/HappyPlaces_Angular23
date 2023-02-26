import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {

constructor(private postservice:PostService,private bookingservice:BookingService) { }
  posts: Array<any> = []
  places: Array<any> = []
  ngOnInit(): void {
    this.postservice.getAllPostsApi().subscribe(resp => {
      this.posts = resp.data;
      console.log(this.posts);

    })
    this.bookingservice.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
    })
  }
  deletePost(postId:any)
  {
    alert("delete" + postId);
    this.postservice.deletePostApi(postId).subscribe(resp=>{
      console.log(resp);

    })
  }
}
