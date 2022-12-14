/**
 * Class that describes the returned API object used in the table
 */
export class DescriptorPage {
    
    /**
     * Content as a list of objects
     */
    content: any[] = [];

    /**
     * Pageable object
     */
    pageable?: any;

    /**
     * Is first page ?
     */
    first: boolean = false;

    /**
     * Is last page ?
     */
    last: boolean = false;

    /**
     * Total number of pages
     */
    totalPages: number = 0;

    /**
     * Total number of elements
     */
    totalElements: number = 0;

    /**
     * Page size
     */
    size: number = 0;

    /**
     * Page number
     */
    number: number = 0;

    /**
     * Number of elements
     */
    numberOfElements: number = 0;

    /**
     * Is content empty ?
     */
    empty: boolean = false;

    /**
     * Sort object
     */
    sort?: any;
}