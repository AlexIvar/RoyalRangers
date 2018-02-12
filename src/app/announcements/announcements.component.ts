import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from '../announcement-model';
import { HomeService } from '../home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {


  announcement = new AnnouncementModel();
  constructor(private homeService: HomeService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  addAnnouncement(){
    console.log(this.announcement);
     this.homeService.addAnnouncement(this.announcement).subscribe(data => {
        this.toastr.success('Tókst að bæta við tilkynningu!', '');
        this.announcement.title = "";
        this.announcement.content = "";
       }, error => {
        this.toastr.error('Ekki tókst að bæta við tilkynningu!', '');
      });

  }

}
