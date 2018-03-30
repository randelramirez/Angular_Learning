import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";

// Note, this feature module or lazy module does not import BrowserModule unlike app.module
@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule],
    declarations: [ProfileComponent, LoginComponent],
    providers: []
})
export class UserModule {

}