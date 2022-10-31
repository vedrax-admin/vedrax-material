import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VedraxApiService } from './vedrax-api.service';
import { DescriptorForm } from '../entities';

/**
 * Service that provides methods for getting descriptor form.
 */
@Injectable({
    providedIn: 'root'
})
export class FormDescriptorService {

    /**
     * Cache of the descriptor form mainly used for creation form
     */
    private descriptors: Map<string, DescriptorForm> = new Map();

    constructor(private apiService: VedraxApiService) { }

    /**
     * Helper method for getting descriptor by endpoint
     * @param endpoint the API endpoint
     * @returns the descriptor from the API
     */
    private getDescriptorFromCache(endpoint: string = ''): DescriptorForm | undefined {
        return this.descriptors.get(endpoint);
    }

    /**
     * Helper method for adding descriptor to the cache
     * @param endpoint the API endpoint
     * @param descriptor the returned descriptor from the API
     */
    private addDescriptorToCache(endpoint: string = '', descriptor: DescriptorForm): void {
        if (endpoint && descriptor) {
            this.descriptors.set(endpoint, descriptor);
        }
    }

    /**
     * Method for getting descriptor either from cache or API
     * @param endpoint 
     * @returns 
     */
    getDescriptor(endpoint: string = '', addToCache: boolean = false): Observable<DescriptorForm> {

        const descriptor = this.getDescriptorFromCache(endpoint);
        if (descriptor) {
            return of(descriptor);
        }

        return this.getDescriptorFromAPI(endpoint, addToCache);
    }

    /**
     * Method for getting the options from API
     * @param endpoint 
     * @returns 
     */
    private getDescriptorFromAPI(endpoint: string = '', addToCache: boolean = false): Observable<DescriptorForm> {
        if (addToCache) {
            return this.apiService.get<DescriptorForm>(endpoint).pipe(
                tap(descriptor => {
                    this.addDescriptorToCache(endpoint, descriptor);
                }));
        }
        return this.apiService.get<DescriptorForm>(endpoint);
    }

}