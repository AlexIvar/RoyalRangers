import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  Posts: boolean = true;
  Notifications: boolean = false;
  showNav = true;
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
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
