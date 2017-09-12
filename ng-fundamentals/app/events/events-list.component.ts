import { Component, OnInit } from '@angular/core';
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'event-list',
  templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // you get data out of an observable by subscribing to it
    // console.log("subscribe",this.eventService.getEvents().subscribe());
    // this.events = this.eventService.getEvents().subscribe(events => { console.log("events", events);this.events = events; });

    // data['events'] is defined in route.ts as part of the resolver
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

}