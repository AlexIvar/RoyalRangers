import { Component, OnInit, Input } from '@angular/core';
import{ Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private router : Router){}

  ngOnInit(){}
}
