import {Component, Input} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`<div class="well hoverwell thumbnail">
    <h2>{{childEvent.name}}</h2>
    <div>Date:{{childEvent.date}}</div>
    <div>Time:{{childEvent.time}}</div>
    <div>Price:\${{childEvent.price}}</div>
    <div>
    <span>Location:{{childEvent.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{childEvent.location.city}}, {{childEvent.location.country}}</span>
    </div>
</div>  `,
  styles:[`
    .thumbnail{
      min-height:210px;
    }
    `
  ]
})

export class EventThumbnailComponent{
  @Input()
  childEvent:any;
}