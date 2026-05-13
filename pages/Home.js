// pages/Home.js
import { Card } from '../components/Card.js';

export const HomeView = () => {
    // Дані для карток (могли б надходити зі state)
    const features = [
        { title: "Organize tasks with ease", subtitle: "Task Organizer", extraHtml: `<div class="feature-image"><span class="badge">Essential</span><span class="feature-placeholder">Task Management</span></div>`, customClass: "feature-card" },
        { title: "Sync with Google Calendar", subtitle: "Calendar Sync", extraHtml: `<div class="feature-image"><span class="badge">Pro</span><span class="feature-placeholder">Calendar Integration</span></div>`, customClass: "feature-card" },
        { title: "Never miss a deadline", subtitle: "Reminders and Alerts", extraHtml: `<div class="feature-image"><span class="badge">Premium</span><span class="feature-placeholder">Custom Reminders</span></div>`, customClass: "feature-card" }
    ];

    return `
        <section class="hero">
            <div class="container">
                <h1>Boost Your Productivity</h1>
                <p>Manage your tasks effortlessly...</p>
                <a href="/pract-7-structured/contact" class="btn-primary" data-link>Try for Free</a>
            </div>
        </section>
        <section id="features" class="features-section bg-light">
            <div class="container">
                <h2>Features Included</h2>
                <div class="cards-grid">
                    ${features.map(feat => Card(feat)).join('')}
                </div>
            </div>
        </section>
    `;
};