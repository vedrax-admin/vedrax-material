import { Injectable } from '@angular/core';

/**
 * Service in charge of local storage
 */
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    /**
     * Method for setting an entry in local storage
     * @param key the key
     * @param value the value for the provided key
     */
    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Method for getting an entry
     * @param key the given key
     * @returns the entry's value otherwise null
     */
    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    /**
     * Method for removing an entry
     * @param key the given key
     */
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}