import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './app-dummy.component.html',
  styleUrls: ['./app-dummy.component.css']
})
export class AppDummyComponent implements OnInit {

  @Input()
  title = "SO DUMB";

  @Output() onClick = new EventEmitter();

  constructor() {
    console.log('The dummy is turning on.');
  }

  ngOnInit() {
  }

}
