import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { Routes } from "@angular/router";

// user/profile (actual url for profile page)
// check route.ts
export const userRoutes: Routes = [{ path: 'profile', component: ProfileComponent },
{ path: 'login', component: LoginComponent }];