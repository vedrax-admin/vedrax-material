import { DescriptorProperty } from './descriptor-property';
import { DescriptorValidation } from './descriptor-validation';
import { DescriptorOption } from './descriptor-option';
import { ControlType } from '../enum/control-types';
import { DescriptorAutocomplete } from './descriptor-autocomplete';


/**
 * Class that describes a control
 */
export class DescriptorFormControl {

    /**
     * The control name or identification
     */
    controlName: string = '';

    /**
     * The control properties (e.g. text, hidden, multiple...)
     */
    controlProperties: DescriptorProperty[] = [];

    /**
     * The control label
     */
    controlLabel: string = '';

    /**
     * The control type (e.g. input, select, datepicker...)
     */
    controlType: ControlType = ControlType.input;

    /**
     * The optional control hint
     */
    controlHint?: string;

    /**
     * The optional control value
     */
    controlValue?: any;

    /**
     * The optional prefix to be included before the input tag
     */
    controlPrefix?: string;

    /**
     * The optional prefix to be included after the input tag
     */
    controlSuffix?: string;

    /**
     * List of optional validations
     */
    controlValidations?: DescriptorValidation[];

    /**
     * List of optional options used mainly in the 'SELECT' or 'AUTOCOMPLETE' controls
     */
    controlOptions?: DescriptorOption[];

    /**
     * Endpoint for options
     */
    endpointForOptions?: string;

    /**
     * The list of the children attributes for constituting the title of an element
     */
    controlKeysAsTitle?: string[];

    /**
     * The 'ARRAY_CONTROLS' uses this list of inner controls 
     * for creating a dynamic form component.
     */
    controlChildren?: DescriptorFormControl[];

    /**
     * The search utility
     */
    controlSearch?: DescriptorAutocomplete;

    /**
     * Used to pass MIME to input file
     */
    controlAccept?: string[];

    /**
     * Use to control the size of the input file
     */
    controlSizeLimit?: number;

}