import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService, ConfigService } from '../services';

/**
 * Authentication and authorization guard
 */
@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private configService: ConfigService
    ) { }

    /**
     * Restrict resource when user is authenticated
     * @param route 
     * @param state 
     */
    canActivate() {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            // returns to home page
            this.router.navigate([this.configService.getHomePage()]);
            return false;
        }

        return true;
    }

}