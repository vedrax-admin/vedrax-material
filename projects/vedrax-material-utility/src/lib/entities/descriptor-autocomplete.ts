import { DescriptorFormControl } from '.';
import { NVP } from './nvp';

export class DescriptorAutocomplete {
    
    /**
     * The search URL
     */
    endpoint: string = '';

    /**
     * The display key
     */
    displayKey: string = '';

    /**
     * Default params
     */
    defaultParams: NVP[] = [];

    /**
     * List of filters
     */
    filters: DescriptorFormControl[] = [];
}