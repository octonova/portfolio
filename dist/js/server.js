// Серверная часть скрипта;
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Добавляем поддержку CORS

// Настройки для Telegram API
const telegramToken = '6020652875:AAEGbJoOH3ZV3E1aGxnjC1PaQg2NLq3eC8w';
const chatId = '-1972107142';
const bot = new TelegramBot(telegramToken);

// Маршрут для обработки отправки формы
app.post('/js/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Выполнение проверок на сервере
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Пожалуйста, заполните все поля формы.' });
    }

    // Отправка сообщения в Telegram
    const text = `Новое сообщение от пользователя:\n\n` +
        `Имя: ${name}\n` +
        `Почта: ${email}\n` +
        `Сообщение: ${message}`;

    bot.sendMessage(chatId, text)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error('Ошибка отправки сообщения в Telegram:', error);
            res.sendStatus(500);
        });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});