import { Component, OnInit } from '@angular/core';
import { EventListService } from "./shared/event-list.service";

@Component({
    selector:'event-list',
    templateUrl:'app/event/event-list.component.html'
})
export class EventListComponent implements OnInit{
    events: any;
    constructor(public _EventListService : EventListService){
      
    }

    ngOnInit(){
      this.events = this._EventListService.getEvents();
    }
}