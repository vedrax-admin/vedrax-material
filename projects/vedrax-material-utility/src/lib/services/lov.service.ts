import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { DescriptorFormControl, DescriptorOption } from "../entities";
import { VedraxApiService } from "./vedrax-api.service";

/**
 * Service that provides methods for handling LOV within form.
 */
@Injectable({
    providedIn: 'root'
})
export class LovService {

    constructor(private apiService: VedraxApiService) { }

    /**
    * cached LOVs for all the application session
    */
    private lovs: Map<string, DescriptorOption[]> = new Map();

    /**
     * Helper method for checking if an entry is available in cache
     * @param endpoint 
     * @returns 
     */
    private hasOptionsInCache(endpoint: string = ''): boolean {
        return this.lovs.has(endpoint);
    }

    /**
     * Helper method for getting list of options by endpoint
     * @param endpoint the API endpoint
     * @returns the returned options from the API
     */
    private getOptionsFromCache(endpoint: string = ''): DescriptorOption[] {
        const options = this.lovs.get(endpoint);
        return options ? options : [];
    }

    /**
     * Helper method for adding options per endpoint to the cache
     * @param endpoint the API endpoint
     * @param options the returned options from the API
     */
    private addOptionsToCache(endpoint: string = '', options: DescriptorOption[] = []): void {
        this.lovs.set(endpoint, options);
    }

    /**
     * Method for getting options from control descriptor
     * @param descriptor 
     * @returns 
     */
    getOptionsFromControlDescriptor(descriptor: DescriptorFormControl = new DescriptorFormControl()): Observable<DescriptorOption[]> {
        //for options available within the descriptor ?
        if (descriptor.controlOptions && descriptor.controlOptions.length > 0) {
            return of(descriptor.controlOptions);
        }
        //for providing endpoint for getting options
        if (descriptor.endpointForOptions) {
            return this.getOptions(descriptor.endpointForOptions);
        }
        //empty
        return of([]);
    }

    /**
     * Method for getting the options from cache or from API
     * @param endpoint 
     * @returns 
     */
    getOptions(endpoint: string = ''): Observable<DescriptorOption[]> {
        if (this.hasOptionsInCache(endpoint)) {
            return of(this.getOptionsFromCache(endpoint));
        }
        return this.getOptionsFromAPI(endpoint);
    }

    getOption(endpoint: string, key: string = ''): Observable<DescriptorOption> {
        return this.getOptions(endpoint).pipe(
            map(options => options.filter(option => option.key === key)[0])
        );
    }

    /**
     * Method for getting the options from API
     * @param endpoint 
     * @returns 
     */
    private getOptionsFromAPI(endpoint: string = ''): Observable<DescriptorOption[]> {
        return this.apiService.get<DescriptorOption[]>(endpoint).pipe(
            tap(options => {
                this.addOptionsToCache(endpoint, options);
            }));
    }


}