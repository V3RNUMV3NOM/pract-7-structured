// services/router.js
import { state, setState } from '../store/state.js';

export const navigateTo = (url) => {
    window.history.pushState(null, null, url);
    setState({ currentPage: url });
};

export const initRouter = () => {
    window.addEventListener('popstate', () => {
        setState({ currentPage: window.location.pathname });
    });

    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });
};