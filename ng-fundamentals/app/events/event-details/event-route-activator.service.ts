import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }

    // checking canActivate it actually accepts two parameters, but TypeScript does not complian, 
    // as long as the return type of the method is the same defined in the interface 
    // (and the other method parameter was omitted, with no errors)
    canActivate(route: ActivatedRouteSnapshot) {
        // convert to !! boolean
        const eventExists = !!this.eventService.getEvent(+route.params['id']) // convert to int +route.params....because getEvent uses === and params['id'] is string
        if(!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    }
}