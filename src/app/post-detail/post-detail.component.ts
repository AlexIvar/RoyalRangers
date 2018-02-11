import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../post-model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }
  postID: Number;
  post: PostModel = new PostModel;
  dateObject: Object = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postID = Number.parseInt(params['id']);
      this.getPostByID();
    });

  }

  getPostByID() {
    this.homeService.getPostByID(this.postID.toString()).subscribe(data => {
      this.post = data;
      let date = new Date(this.post.date);

      let dateObject = {
        dayOfMonth: date.getDate(),
        dayOfWeek: date.toLocaleString("en-us", { weekday: "long" }),
        month: date.toLocaleString("en-us", { month: "long" })
      };

      this.dateObject = dateObject;

    });

  }

}
