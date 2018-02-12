import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import { PostModel } from '../post-model';
import { AnnouncementModel } from '../announcement-model';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private translate: TranslateService) { }
  Posts: boolean = true;
  Notifications: boolean = false;
  showNav = true;
  posts: PostModel[] = [];
  announcements: AnnouncementModel[] = [];

  ngOnInit() {
    this.getUsers();
    this.getPosts();
    this.getAnnouncements();
  }

  getUsers() {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
    });
  }

  getPosts() {
    this.homeService.getPosts().subscribe(data => {
      this.posts = data.reverse();
    });
  }

  getAnnouncements() {
    this.homeService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    });
  }


  changeDisplay(x: string) {
    if (x === "Posts") {
      this.Posts = true;
      this.Notifications = false;
    }
    else if (x === "Notifications") {
      this.Posts = false;
      this.Notifications = true;
    }
  }

}
