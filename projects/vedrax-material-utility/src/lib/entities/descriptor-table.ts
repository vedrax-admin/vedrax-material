import { DescriptorFormControl } from '.';
import { DescriptorColumn } from './descriptor-column';

/**
 * Class that describes a table
 */
export class DescriptorTable {

    /**
     * The title / object of the table
     */
    title: string = '';

    /**
     * Load on component initialization
     */
    loadOnInit?: boolean = false;

    /**
     * Is the result paginated
     */
    paginated?: boolean = false;

    /**
     * The endpoint for getting the data
     */
    path: string = '';

    /**
     * The controls to search the data for
     */
    filters: DescriptorFormControl[] = [];

    /**
     * The list of columns displayed
     */
    columns: DescriptorColumn[] = [];

}