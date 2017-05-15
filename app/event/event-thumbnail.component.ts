import {Component, Input} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`<div class="well hoverwell thumbnail">
    <h2>{{childEvent?.name}}</h2>
    <div>Date:{{childEvent?.date}}</div>
    <div [ngSwitch]="childEvent?.time" [ngClass]="markIt()">
      Time:{{childEvent?.time}}
      <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
      <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
      <span *ngSwitchDefault> (Normal start)</span>
    </div>
    <div>Price:\${{childEvent?.price}}</div>
    <div>
    <div *ngIf="childEvent.location">
    <span>Location:{{childEvent?.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{childEvent?.location.city}}, {{childEvent?.location.country}}</span>
    <div>
    </div>
</div>  `,
  styles:[`
    .thumbnail{
      min-height:210px;
    }
    .green{
      color:chartreuse;
    }
    .bold{
      font-weight:bold;
    }
    `
  ]
})

export class EventThumbnailComponent{
  @Input()
  childEvent:any;

  markIt(){
    if(this.childEvent && this.childEvent.time=="8:00 am"){
      return 'green bold';
    }else{
      return;
    }
  }
}