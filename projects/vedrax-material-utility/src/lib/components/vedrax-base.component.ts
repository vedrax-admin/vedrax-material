import { Input, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { DescriptorFormControl } from '../entities/descriptor-form-control';
import { ConfigService } from '../services/config.service';

/**
 * Base class for each control
 */
@Component({
    selector: 'vedrax-base',
    template: ''
})
export class VedraxBaseComponent implements OnInit {

    /**
     * The form control
     */
    @Input() control: FormControl = new FormControl();

    /**
     * The control descriptor object
     */
    @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();

    /**
     * The form field appearance used by default
     */
    formControlAppearance: MatFormFieldAppearance = 'fill';

    constructor(public configService: ConfigService) {
    }

    ngOnInit(): void {
        this.formControlAppearance = this.configService.getFormControlAppearance();
    }

    /**
     * Helper method for checking in a template if a property exists. 
     * If the property exists, we return the property value, otherwise false.
     * 
     * @param name the property name
     */
    hasProperty(name: string): any {
        const properties = this.descriptor.controlProperties || [];
        const property = properties.find(property => property.propertyName === name);
        return property ? property.propertyValue : false;
    }
}