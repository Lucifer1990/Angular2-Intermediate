import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';  

import { EventListComponent } from "./event/event-list.component";
import { EventThumbnailComponent } from "./event/event-thumbnail.component";
import { NavBar } from "./navbar/navbar.component";

@NgModule({
  imports: [ BrowserModule ,
              FormsModule
          ],
  declarations: [ AppComponent,
                  EventListComponent,
                  EventThumbnailComponent,
                  NavBar
                ],
  bootstrap: [ AppComponent]
})
export class AppModule { }