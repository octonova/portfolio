// Клиентская часть скрипта;
const form = document.getElementsByClassName('contacts__form')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const message = document.getElementById('user_text').value;

    const userData = {
        name: name,
        email: email,
        message: message
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form'); // Путь к серверному обработчику формы
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Успешное выполнение запроса
            alert('Форма успешно отправлена!');
            form.reset(); // Сброс формы
        } else {
            // Обработка ошибок при отправке формы
            alert('Ошибка отправки формы: ' + xhr.statusText);
        }
    };
    xhr.send(JSON.stringify(userData));
});


