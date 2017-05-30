import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dummy-component',
  templateUrl: './app-dummy-component.component.html',
  styleUrls: ['./app-dummy-component.component.css']
})
export class AppDummyComponentComponent implements OnInit {
  title = "SO DUMB";
  constructor() {
    console.log('The dummy is turning on.');
  }

  ngOnInit() {
  }

}
