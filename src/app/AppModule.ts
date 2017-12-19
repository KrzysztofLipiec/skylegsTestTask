import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './AppComponent';
import {DurationModule} from "../components/duration/DurationModule";
import {AppRoutingModule} from "./AppRoutingModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
