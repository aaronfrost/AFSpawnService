import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppDummyComponentComponent } from './app-dummy-component/app-dummy-component.component';
import { SpawnService } from './spawn.service';

@NgModule({
  declarations: [
    AppComponent,
    AppDummyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [SpawnService],
  bootstrap: [AppComponent],
  entryComponents: [
    AppDummyComponentComponent
  ]
})
export class AppModule { }
