// pages/Users.js
import { Card } from '../components/Card.js';

export const UsersView = (state) => {
    return `
        <section class="features-section">
            <div class="container">
                <h2>Our Users</h2>
                ${state.isLoading ? `<div class="message-box">Завантаження даних...</div>` : ''}
                ${state.error ? `<div class="message-box error">${state.error}</div>` : ''}
                
                ${!state.isLoading && !state.error && state.apiData.length > 0 ? `
                    <div class="cards-grid">
                        ${state.apiData.slice(0, 6).map(user => 
                            Card({
                                title: user.name,
                                content: `<strong>Email:</strong> ${user.email}<br>
                                          <strong>Company:</strong> ${user.company.name}<br>
                                          <strong>City:</strong> ${user.address.city}`,
                                customClass: "horizontal-card"
                            })
                        ).join('')}
                    </div>
                ` : ''}
            </div>
        </section>
    `;
};