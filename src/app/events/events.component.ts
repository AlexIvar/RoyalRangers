import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PostModel } from '../post-model';
import { HomeService } from '../home.service';
declare var Cropper: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],

})


export class EventsComponent implements OnInit {

  showNav = false;
  @ViewChild('photo') photo : ElementRef;
  input : boolean = true;
  step : string;
  post = new PostModel();
  constructor(private element: ElementRef, private homeService: HomeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  addEvent() {
     this.homeService.addPost(this.post);
     console.log("added this post : " + this.post);
   }

  reset(){
    this.step = "";
    var image = this.element.nativeElement.querySelector('#cardImage');
    image.src = "https://image.ibb.co/igq6gv/empty.png";
    Cropper.destroy();
    this.input = true;
  }

  displayPhoto(fileInput) {
    //bæti við class img
    this.step = "step1";

    if (fileInput.target.files && fileInput.target.files[0]) {
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('#cardImage');
    reader.onload = ((e) => {
      this.input = false;
      image.src = e.target['result'];
       Cropper = new Cropper(this.photo.nativeElement, {
                  aspectRatio: 3 / 2,
                  dragMode: 'move',
                  background: false,
                  ready: function () {
                   // Do something here
                   // ...

                   // And then
                   this.cropper.clear();
                 }
           });
    });

    reader.readAsDataURL(fileInput.target.files[0]);
  }
}

addPost(){

}

}
