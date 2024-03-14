import { writable } from 'svelte/store';


export const name = writable('');
export const phone = writable('');
export const email = writable('');
export const message = writable('Olá, seja bem-vindo!');
export const openModal = writable(true);
export const showApplicant = writable(false);