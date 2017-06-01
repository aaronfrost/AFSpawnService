import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppDummyComponent } from './app-dummy/app-dummy.component';
import { AFSpawnService } from './af-spawn.service';

@NgModule({
  declarations: [
    AppComponent,
    AppDummyComponent
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
  providers: [AFSpawnService],
  bootstrap: [AppComponent],
  entryComponents: [
    AppDummyComponent
  ]
})
export class AppModule { }
