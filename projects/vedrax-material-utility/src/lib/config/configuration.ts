import { InjectionToken } from "@angular/core";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

/**
 * Interface that represents the library configuration
 */
export interface Configuration {

    /**
     * The form component appearance (fill or outline)
     */
    formComponentAppearance : MatFormFieldAppearance;

    /**
     * Snack bar horizontal position
     */
    snackBarHorizontalPosition: MatSnackBarHorizontalPosition;

    /**
     * Snack bar vertical position
     */
    snackBarVerticalPosition: MatSnackBarVerticalPosition;

    /**
     * The login endpoint
     */
    loginEndpoint: string;

    /**
     * The verify email address endpoint
     */
    verifyEmailAddressEndpoint: string;

}

export const VEDRAX_CONFIG = new InjectionToken<Configuration>('VEDRAX_CONFIG');