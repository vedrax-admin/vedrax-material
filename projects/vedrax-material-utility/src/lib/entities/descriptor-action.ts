import { ActionType } from '../enum/action-types';
import { DescriptorActivate } from './descriptor-activate';

/**
 * A class that describes the available actions for a column
 */
export class DescriptorAction {

    /**
     * The action label
     */
    label: string = '';

    /**
     * when set to true the action redirect to the given url, 
     * otherwise the action call an API with the URL
     */
    action: ActionType = ActionType.select;

    /**
     * Base url used for redirection or for API call
     */
    url?: string = '';

    /**
     * An optional fragment to append to the url and item identification
     * <url>/<id>/<fragment>
     */
    fragment?: string;

    /**
     * Activate object
     */
    activate?: DescriptorActivate;

    /**
     * Pass action parameters
     */
    params?: Map<string, any> = new Map();

}