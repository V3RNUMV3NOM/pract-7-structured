// api.js

// Функція для виконання GET-запиту до API
export const fetchUsers = async () => {
    try {
        // Використовуємо публічне API JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Базова обробка помилок (якщо статус не в діапазоні 200-299)
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        // Отримання JSON-даних
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        // Повертаємо повідомлення про помилку, якщо запит неуспішний
        return { data: null, error: 'Не вдалося завантажити дані. Перевірте з\'єднання з інтернетом.' };
    }
};