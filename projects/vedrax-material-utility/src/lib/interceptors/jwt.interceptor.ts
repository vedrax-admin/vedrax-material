import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService, ConfigService } from '../services';

// case insensitive check against config and value
const startsWithAny = (arr: string[] = []) => (value = '') => {
    return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// http, https, protocol relative
const isAbsoluteURL = startsWithAny(['https', 'http', '//']);

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private authenticationService: AuthenticationService,
        private config: ConfigService) { }

    /**
     * Add JWT token when available in request header
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
        const user = this.authenticationService.currentUserValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(this.config.getAPIBaseUrl());
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.token}` }
            });
        }

        return next.handle(request);
    }
}

export let jwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
};