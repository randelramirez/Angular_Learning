import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../index";

// note: this component doesn't have a selector since this won't be used as a child component from another page, this is used directly
@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event:IEvent;
    constructor (private eventService: EventService, private route: ActivatedRoute){

    }
    ngOnInit(): void {
        var routeParameter = +this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(routeParameter);
    }

}