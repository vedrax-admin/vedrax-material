import { ComparatorType } from "../enum/comparator-type";

export class DescriptorActivate {

    /**
     * Field name to be tested
     */
    field: string = '';

    /**
     * The comparison type
     */
    comparator: ComparatorType = ComparatorType.eq;

    /**
     * expected value
     */
    value: any;

}