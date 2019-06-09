class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.secsElement = container.querySelector('.status__seconds');
    this.timerId = null;
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    document.addEventListener('keyup', (e) => {
        this.currentSymbol.textContent
          .toLowerCase() === e.key.toLowerCase() ? 
            this.success() : 
              this.fail();
    });
  }

  success() {

    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      return;
    };

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    };
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    };
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    
    this.renderWord(word);

    clearInterval(this.timerId);
    this.setTimer();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');

    this.wordElement.innerHTML = html;
    
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  setTimer() {

    const n = this.wordElement.textContent.length;
    this.secsElement.textContent = n;

    
    this.timerId = setInterval(() => {
      this.secsElement.textContent--;

      if (Number(this.secsElement.textContent) === 0) {
          this.fail();
          return;
      };
    }, 1000);
  }
};

// Если реализуется какой либо таймер, то нужно завязываться 
// именно на методы Date, а не на setInterval, т.к. в данном случае 
// мы имеем дело с асинхронным кодом и гарантии, что например, 
// setInterval будет срабатывать каждую секунду нет. 

// Поэтому правильнее сделать так:
// 1. определить конечную дату Date.now() + требуемое количество миллисекунд
// 2. при каждом срабатывании таймера вычисляем оставшееся количество времени:
// конечная дата - Date.now()
// 3. устанавливаем новое значение счетчика и проверяем вышло ли время ну и т.д.

new Game(document.getElementById('game'));

