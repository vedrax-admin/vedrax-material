import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { VedraxApiService } from './vedrax-api.service';
import { LocalStorageService } from './local-storage.service';
import { User, LoginDto, VerifyDto } from '../entities';
import { Role } from '../enum/role.enum';
import { ConfigService } from './config.service';

const userLocalStorageName = 'vedrax-current-user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    /**
     * Hold the authenticated user that needs to be share with other components
     */
    private currentUserSubject: BehaviorSubject<User>;

    /**
     * An Observable of the authenticated user 
     */
    public currentUserObs: Observable<User>;

    constructor(
        private configService: ConfigService,
        private apiService: VedraxApiService,
        private localStorageService: LocalStorageService,
        private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
        this.currentUserObs = this.currentUserSubject.asObservable();
    }

    /**
     * Helper method for getting user from local storage otherwise it creates a user as visitor
     * @returns user
     */
    private getUserFromLocalStorage(): User {
        const user = this.localStorageService.get(userLocalStorageName);

        if (user) {
            return JSON.parse(user);
        }

        return new User(); //visitor
    }

    /**
     * Helper method for detecting if the user is logged in
     */
    public get isLoggedIn(): boolean {
        let user = this.getUserFromLocalStorage();
        return user.userRole !== Role.VISITOR;
    }

    /**
     * Helper method for detecting if a user has permission
     * @param roles the authorized roles
     * @returns true if the user has the role contains in the provided authorized roles, otherwise false
     */
    public hasPermission(roles: Role[] = []): boolean {
        let user = this.getUserFromLocalStorage();
        return roles.indexOf(user.userRole) !== -1;
    }

    /**
     * Get authenticated user
     */
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /**
     * Set authentication by passing user to subject
     */
    public setAuthentication(user: User) {
        this.currentUserSubject.next(user);
    }

    /**
     * Sign in a user
     * @param payload the payload
     */
    login(payload: LoginDto) {

        return this.apiService.post<User>(this.configService.getLoginEnpoint(), payload)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.localStorageService.set(userLocalStorageName, user);
                    this.setAuthentication(user);
                }
                return user;
            }));
    }

    /**
     * Log user out by removing user from local storage
     */
    logout() {
        this.localStorageService.remove(userLocalStorageName);
        this.setAuthentication(new User());
        this.router.navigate(['/']);//return to login page
    }

    /**
   * Method for verifying account
   * @param payload the payload
   * @returns 
   */
    verifyAccount(payload: VerifyDto) {
        return this.apiService.post<any>(this.configService.getVerifyEmailAddressEnpoint(), payload);
    }
}