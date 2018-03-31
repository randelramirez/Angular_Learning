import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolverService } from "./events/event-list-resolver.service";
import { UserModule } from "./user/user.module";

export const appRoutes: Routes = [

    /*
        There are two ways to add route guards, a service or a function
     */

    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    // for resolve, see EventsListComponent
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },

    /*loadchildren:  directory#Classname */
     { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
    // { path: 'user', loadChildren: () => UserModule }
]