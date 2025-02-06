const messages = [
    "Ти впевнена?",
    "Дійсно впевнена??",
    "Зажди,ти серйозно..?",
    "ну,ну,ну будь ласка...",
    "Лише подумай про це!!!",
    "Якщо ти відповіси ні,мені буде дуже сумно((",
    "Я буду розчарований...",
    "Я буду дуже дуже сумний...",
    "ГАРАЗД!! я більше не питатиму!!",
    "Ха-ха, жартую))але скажи 'Так' ",
    "Ну реально , скажи так((",
    "Тикай тикай, я доб'юсь свого!!",
    "Камон, це вже не смішно",
    "Я старався,а ти так грубо((",
    "Знаєш,я так ще нікому не пропонував",
    "Подумай ще разок...",
    "І ще разок",
    "Подумай гарно!!!!",


];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1 ) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize *1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}