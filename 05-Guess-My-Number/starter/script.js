'use strict';

// 1. generate random number
// 2. add on click listner
// 3. add conditions
// 4. add changes

const secritNumber = Math.trunc(Math.random(1, 20) * 10) + 1;
let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secritNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secritNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
  } else if (score <= 1) {
    displayMessage('💥 You lost the game!');
    document.querySelector('.number').textContent = secritNumber;
    document.querySelector('body').style.backgroundColor = 'red';
    score = 0;
    document.querySelector('.score').textContent = score;
  } else if (guess > secritNumber) {
    score--;
    document.querySelector('.score').textContent = score;

    displayMessage('📈 Too high!');
  } else if (guess < secritNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage('📉 Too low!');
  }
});
