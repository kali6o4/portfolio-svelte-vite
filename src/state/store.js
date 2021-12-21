import { writable } from "svelte/store";

export let errorState = writable(false);
export let loadingState = writable(false);
export let portfolioQuery = writable([]);