import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from './shared/event.service'
import { Observable } from "rxjs/RX";
import { IEvent } from "./index";

@Injectable()
export class EventListResolverService implements Resolve<any>{
    constructor(private eventService: EventService){  
    }
    resolve(): Observable<IEvent[]> {

        // note: arrow functions with no body automatically returns;
        //return this.eventService.getEvents().map(events => { return events;})

        // returns the observable to angular
        // return this.eventService.getEvents().subscribe() returns a subscription not an observable
        // this will return the data to resolve: { events: EventListResolverService }, in route.ts, then from there it passed to the route and is accessible in the component
        return this.eventService.getEventsObservable().map(events => events);
    }

}