import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService, ConfigService } from '../services';
import { Role } from '../enum';

/**
 * Authentication and authorization guard
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private configService: ConfigService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isAuthorized(route, state);
    }

    canLoad(route: Route): boolean {
        return this.isAuthorized(route);
    }

    /**
     * Helper method for checking if user is authenticated and authorized
     * @param route 
     * @param state 
     */
    private isAuthorized(route: any, state?: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {

            //check if route is restricted by role
            if (this.whenNoPermission(route, currentUser.userRole)) {
                // if unauthorized, redirect to dashboard page
                this.router.navigate([this.configService.getRedirectionPageWhenNoPermission()]);
                return false;
            }
            //authorized so return true
            return true;

        }
        this.navigateToHomePage(state);
        return false;
    }

    private whenNoPermission({ data = {} }: any, role: string = Role.VISITOR): boolean {
        let roles = data.roles || [role];
        return roles.indexOf(role) === -1;
    }

    private navigateToHomePage(state: RouterStateSnapshot | undefined): void {
        if (state) {
            this.router.navigate([this.configService.getHomePage()], { queryParams: { returnUrl: state.url } });
        } else {
            this.router.navigate([this.configService.getHomePage()]);
        }
    }

}