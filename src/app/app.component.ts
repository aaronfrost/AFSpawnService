import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { AppDummyComponent} from './app-dummy/app-dummy.component';
import {AFSpawnService} from "./af-spawn.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  @ViewChild('dummyoutlet', {read: ViewContainerRef})
  dummyOutlet;

  constructor(
    public dialog: MdDialog
    , private spawnService: AFSpawnService
  ){

  }

  showThing(){
    let dialogRef = this.dialog.open(AppDummyComponent, {
      height: '400px',
      width: '600px',
    });
  }

  showCustomThing(){
    let context = {title: 'Brocchi Rocks'};
    let spawnRef = this.spawnService.createComponent(AppDummyComponent, this.dummyOutlet, context);

    let i = 0;
    setInterval(_ => {
      i++;
      context.title = i.toString();
      spawnRef.next(context);
    }, 100);
  }

  showAnotherThing(){
    const context = {
      title: 'Another thing',
      onClick: ()=>console.log('output called')
    };
    let spawnRef = this.spawnService.createComponent(AppDummyComponent, undefined, context);
    let i=0;
    setInterval(_ => {
      i++;
      context.title = i.toString();
      spawnRef.next(context);
    }, 100);
  }

}
