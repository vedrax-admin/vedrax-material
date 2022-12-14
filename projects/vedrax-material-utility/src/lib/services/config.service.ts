import { Inject, Injectable } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Configuration, VEDRAX_CONFIG } from '../config/configuration';

/**
 * Service in charge of getting the passed global configuration
 */
@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(@Inject(VEDRAX_CONFIG) private config: Configuration) { }

    /**
     * @returns the form control appearance (fill or outline) used for each form control
     */
    getFormControlAppearance(): MatFormFieldAppearance {
        return this.config.formComponentAppearance ? this.config.formComponentAppearance : 'fill';
    }

    /**
     * @returns the default horizontal position used in snackbar
     */
    getHorizontalPosition(): MatSnackBarHorizontalPosition {
        return this.config.snackBarHorizontalPosition ? this.config.snackBarHorizontalPosition : 'start';
    }

    /**
     * @returns the default vertical position used in snackbar
     */
    getVerticalPosition(): MatSnackBarVerticalPosition {
        return this.config.snackBarVerticalPosition ? this.config.snackBarVerticalPosition : 'bottom';
    }

    getSnackBarDuration(): number {
        return this.config.snackBarDuration ? this.config.snackBarDuration : 2000;
    }

    /**
     * @returns the login endpoint
     */
    getLoginEnpoint(): string {
        return this.config.loginEndpoint ? this.config.loginEndpoint : '/login';
    }

    /**
     * @returns the login endpoint
     */
    getVerifyEmailAddressEnpoint(): string {
        return this.config.verifyEmailAddressEndpoint ? this.config.verifyEmailAddressEndpoint : '/verify';
    }

    /**
     * @returns the redirection page used when no permission
     */
    getRedirectionPageWhenNoPermission(): string {
        return this.config.redirectionPageWhenNoPermission ? this.config.redirectionPageWhenNoPermission : '/';
    }

    /**
     * @returns the home page URL
     */
    getHomePage():string {
        return this.config.homePage ? this.config.homePage : '/';
    }

    getAPIBaseUrl():string {
        return this.config.apiBaseUrl ? this.config.apiBaseUrl : '/api';
    }

}