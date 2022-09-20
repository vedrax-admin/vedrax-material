import { NVP } from './nvp';

/**
 * Class that represents a matrix
 */
export class MatrixColumn {

    /**
     * Flag set when visible
     */
    visible: boolean = false;

    /**
     * The matrix key
     */
    key: string = '';

    /**
     * The matrix entries
     */
    entries: NVP[] = [];
}