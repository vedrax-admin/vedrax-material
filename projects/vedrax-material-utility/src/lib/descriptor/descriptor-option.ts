/**
 * Class that describes a select option used mainly in list of choices 
 * for populating available options
 */
export class DescriptorOption {

    /**
     * The option key
     */
    key: any;

    /**
     * The option value
     */
    value: string = '';

    /**
     * Is the value is a translation key ?
     */
    valueAsTranslationKey: boolean = false;
}