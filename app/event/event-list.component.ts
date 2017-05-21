import { Component, OnInit } from '@angular/core';
import { EventListService } from "./shared/event-list.service";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector:'event-list',
    templateUrl:'app/event/event-list.component.html'
})
export class EventListComponent implements OnInit{
    events: any;
    constructor(public _EventListService : EventListService,
                public _ToastrService : ToastrService){
      
    }

    ngOnInit(){
      this.events = this._EventListService.getEvents();
    }
    showToastr(eventName){
        this._ToastrService.success(eventName);
    }
}