// main.js
import { state, subscribe, setState } from './store/state.js';
import { initRouter } from './services/router.js';
import { fetchUsers } from './services/api.js';

import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js'; 
import { HomeView } from './pages/Home.js';
import { AboutView } from './pages/About.js';   
import { ContactView } from './pages/Contact.js'; 
import { UsersView } from './pages/Users.js';

const routes = {
    '/pract-7/': HomeView,
    '/pract-7/about': AboutView,
    '/pract-7/contact': ContactView,
    '/pract-7/users': UsersView
};

const render = () => {
    const root = document.getElementById('root');
    const path = state.currentPage;
    const ViewComponent = routes[path] || routes['/pract-7/'];
    
    root.innerHTML = `
        ${Header()}
        <main id="app">
            ${ViewComponent(state)}
        </main>
        ${Footer()}
    `;

    if (path === '/pract-7/users') loadUsersData();
    if (path === '/pract-7/contact') initContactForm();
};

// --- Логіка форми ---
const initContactForm = () => {
    const form = document.getElementById('contact-form');
    const msgBox = document.getElementById('form-message');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!form) return;

    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('input-error');
            msgBox.style.display = 'none';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        nameInput.classList.remove('input-error');
        emailInput.classList.remove('input-error');
        messageInput.classList.remove('input-error');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            msgBox.textContent = 'Please fill in all fields.';
            msgBox.className = 'message-box error';
            msgBox.style.display = 'block';
            if (!name) nameInput.classList.add('input-error');
            if (!email) emailInput.classList.add('input-error');
            if (!message) messageInput.classList.add('input-error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            msgBox.textContent = 'Please enter a valid email address.';
            msgBox.className = 'message-box error';
            msgBox.style.display = 'block';
            emailInput.classList.add('input-error');
            return;
        }

        msgBox.style.display = 'none';
        const newRequests = [...state.requests, { name, email, message }];
        setState({ requests: newRequests });
    });
};

const loadUsersData = async () => {
    if (state.apiData.length > 0 || state.isLoading) return; 
    setState({ isLoading: true, error: null }); 
    const { data, error } = await fetchUsers(); 
    setState({ isLoading: false, apiData: data || [], error: error });
};

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    subscribe(render); 
    render(); 
});