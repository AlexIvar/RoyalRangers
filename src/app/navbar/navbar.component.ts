import { Component, OnInit, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  @Input() showNav: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
