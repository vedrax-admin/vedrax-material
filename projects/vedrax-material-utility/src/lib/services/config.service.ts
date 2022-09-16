import { Inject, Injectable } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
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

}