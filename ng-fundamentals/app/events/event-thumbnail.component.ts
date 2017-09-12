import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; } 
    .well div { color:  #bbb }
    .green { color: green !important }
    .bold { font: bold }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    // returning an object
    // getStartTimeClass() {
    //     const isEarlyStart = this.event && this.event.time === '8:00 am'
    //     return { green: isEarlyStart, bold: isEarlyStart }
    // }

    // returning string of class names
    // getStartTimeClass() {
    //     if (this.event && this.event.time === '8:00 am')
    //         return 'green bold';
    //     return '';
    // }

    // returning array of class names
    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    }

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
        // text-decorationt is wrapped in '' because it's separated with -(hypen)
      return {border: '2px solid red', 'text-decoration': 'line-through'}
    return {}
  }

}
