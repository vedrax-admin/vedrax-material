import { InjectionToken } from "@angular/core";
import { MatFormFieldAppearance } from "@angular/material/form-field";

/**
 * Interface that represents the library configuration
 */
export interface Configuration {

    /**
     * The form component appearance (fill or outline)
     */
    formComponentAppearance : MatFormFieldAppearance;

}

export const VEDRAX_CONFIG = new InjectionToken<Configuration>('VEDRAX_CONFIG');