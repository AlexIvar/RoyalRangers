import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  openModalWindow: boolean = false;
  imagePointer: number;
  images = [
    { thumb: '../assets/images/forest.jpg', img: '../assets/images/forest.jpg', description: 'Image 1' },
    { thumb: '../assets/images/forest_transparent.png', img: '../assets/images/forest_transparent.png', description: 'Image 2' },
    { thumb: '../assets/images/forest.jpg', img: '../assets/images/forest.jpg', description: 'Image 3' },
    { thumb: '../assets/images/forest_transparent.png', img: '../assets/images/forest_transparent.png', description: 'Image 4' },
  ];

  constructor() {

  }

  ngOnInit() {
  }

  OpenImageModel(imageSrc, images) {
    var imageModalPointer;
    for (var i = 0; i < images.length; i++) {
      if (imageSrc === images[i].img) {
        imageModalPointer = i;
        break;
      }
    }
    this.openModalWindow = true;
    this.images = images;
    this.imagePointer = imageModalPointer;
  }

  cancelImageModel() {
    this.openModalWindow = false;
  }


}
