import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationService, SnackbarService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let handled: boolean = false;

        return next.handle(request).pipe(
            retry(1),
            catchError((returnedError) => {

                let errorMessage: string | undefined;

                if (returnedError.error instanceof ErrorEvent) {
                    errorMessage = `Error: ${returnedError.error.message}`;
                } else if (returnedError instanceof HttpErrorResponse) {
                    errorMessage = `Error Status ${returnedError.status}: ${returnedError.error.error} - ${returnedError.error.message}`;
                    handled = this.handleServerError(returnedError);
                }

                console.error(errorMessage ? errorMessage : returnedError);

                if (!handled) {
                    if (errorMessage) {
                        return throwError(() => new Error(errorMessage));
                    } else {
                        return throwError(() => new Error("Unexpected problem occurred"));
                    }
                } else {
                    return of(returnedError);
                }

            }));
    }

    private handleServerError(error: HttpErrorResponse): boolean {

        const authService = this.injector.get(AuthenticationService);
        const snackBarService = this.injector.get(SnackbarService);
        let handled: boolean = false;

        switch (error.status) {
            case 401:
                snackBarService.open("login.again");
                authService.logout();
                handled = true;
                break;
            case 403:
                snackBarService.open("not.authorized");
                authService.logout();
                handled = true;
                break;
        }

        return handled;
    }
}

export let errorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};