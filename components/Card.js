// components/Card.js
export const Card = ({ title, subtitle, content, customClass = '', extraHtml = '' }) => `
    <div class="card ${customClass}">
        ${extraHtml}
        <div class="feature-info">
            ${subtitle ? `<p class="feature-subtitle">${subtitle}</p>` : ''}
            <h3>${title}</h3>
            ${content ? `<p style="text-align: left; margin-bottom: 5px; font-size: 0.9em; color: #555;">${content}</p>` : ''}
        </div>
    </div>
`;