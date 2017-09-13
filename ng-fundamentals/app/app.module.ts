import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { EventsAppComponent } from './events/events-app.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolverService
} from "./events/index";
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component],

  /*
    Another way to define providers, using the long-hand approach
    { provide: EventService, useValue: EventSerivce },, when provide: Type is requested useValue: Type is created
  */
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}