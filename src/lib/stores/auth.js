import {writable} from "svelte/store";
import {browser} from "$app/environment";

export const isAuthenticated = writable(false);

// by checking browser, it ensures it only runs on client side, as localStorage is unavailable on server side
export const token = writable(browser && localStorage.getItem('auth_token') || null);

token.subscribe(value => {
    if (browser) {
        // if value is not null, save to localStorage, otherwise remove it from localStorage
        if (value) {
            localStorage.setItem('auth_token', value);
            isAuthenticated.set(true);
        } else {
            localStorage.removeItem('auth_token')
            isAuthenticated.set(false);
        }
    }
});




