const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages' );

const botAnswers = [
    'Где деньги Лобавский?',
    'Говорят, русские — очень опасные, а этот вообще со всех сторон ненормальный.',
    'Будешь размышлять — плохо кончишь.',
    'Наличие «личика» — еще не синоним личности',
    'Меня зовут Джон Коффи — как напиток, только пишется по-другому.'
];

chatWidgetSide.addEventListener('click', () => {

    chatWidget.classList.add('chat-widget_active');

});



chatWidgetInput.addEventListener('keyup', (e) => {

    let message = chatWidgetInput.value.trim();

    if ((e.key).toLowerCase() === 'enter' && message !== '') {

        addClientMessage(message);
            addBotMessage();
                cleanUpInputField(chatWidgetInput);               
    };
});

function scrollToBottom() {
    const widgetContainer = document.querySelector('.chat-widget__messages-container');
    widgetContainer.scrollTop = widgetContainer.scrollHeight;
};

function getTime() {
    return `${new Date().getHours()}:${new Date().getMinutes() < 10 ? 
                '0' + new Date().getMinutes() : 
                    new Date().getMinutes()}`;
};

function getRandomBotAnswer() {

    return botAnswers[Math.floor(Math.random() * botAnswers.length)];

};

function addClientMessage(message) {

    messages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${message}</div>
            </div>`;

    scrollToBottom();
};

function addBotMessage() {

    messages.innerHTML += 
        `<div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${getRandomBotAnswer()}</div>
        </div>`;

    scrollToBottom();
    setTimeout(addBotMessage, 30000);
};

function cleanUpInputField(message) {
    message.value = '';
};


