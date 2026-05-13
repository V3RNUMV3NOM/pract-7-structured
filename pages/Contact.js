// pages/Contact.js
export const ContactView = (state) => `
    <section class="features-section">
        <div class="container">
            <h2>Contact Us</h2>
            <form id="contact-form" class="contact-form" novalidate>
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" id="name" class="form-control" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" id="email" class="form-control" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Message:</label>
                    <textarea id="message" class="form-control" rows="4" placeholder="Your message..."></textarea>
                </div>
                <div id="form-message" class="message-box" style="display: none;"></div>
                <button type="submit" class="btn-primary">Submit</button>
            </form>

            <h3 style="margin-top: 40px;">Recent Requests:</h3>
            <div class="cards-grid">
                ${state.requests ? state.requests.map(req => `
                    <div class="card">
                        <div class="card-icon" style="background-color: #4CAF50;"></div>
                        <h3>${req.name}</h3>
                        <p style="font-size: 0.9em; color: #888;">${req.email}</p>
                        <p>${req.message}</p>
                    </div>
                `).join('') : ''}
            </div>
        </div>
    </section>
`;