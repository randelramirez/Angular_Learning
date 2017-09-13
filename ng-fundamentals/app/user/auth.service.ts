import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

// this is registed in the app.module so that it is also accessible outside of the user.module
// (because user.module is lazily-loaded so we need to register it in app.module 
// so this service can be accessed by other components) NOTE: proivers: [] are shared among ngModules
@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: userName
        }
    }

    isAuthenticated(){
        // !! converts to boolean, returns true if current user has value and false if not
        // returns true if the current user is set
        return !!this.currentUser;
    }
}