// store/state.js
export const state = {
    currentPage: window.location.pathname,
    requests: [], 
    apiData: [],  
    isLoading: false, 
    error: null   
};

const listeners = [];

export function setState(newState) {
    Object.assign(state, newState);
    listeners.forEach(listener => listener(state));
}

export function subscribe(listener) {
    listeners.push(listener);
}