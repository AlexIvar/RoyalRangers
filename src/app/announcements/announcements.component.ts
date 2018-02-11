import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from '../announcement-model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {


  announcement = new AnnouncementModel();
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  addAnnouncement(){
    console.log(this.announcement);
     this.homeService.addAnnouncement(this.announcement);
  }
}
