import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { AppDummyComponentComponent} from './app-dummy-component/app-dummy-component.component';
import {SpawnService} from "./spawn.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  @ViewChild('dummyoutlet', {read: ViewContainerRef})
  dummyOutlet;

  constructor(public dialog: MdDialog, private spawnService: SpawnService){

  }

  showThing(){
    let dialogRef = this.dialog.open(AppDummyComponentComponent, {
      height: '400px',
      width: '600px',
    });
  }

  showCustomThing(){
    console.log('I don\'t think I have enough smarts to get this to work.');
    this.spawnService.makeAThing(AppDummyComponentComponent, this.dummyOutlet);
  }

  showAnotherThing(){
    this.spawnService.makeAThing(AppDummyComponentComponent);
  }

}
