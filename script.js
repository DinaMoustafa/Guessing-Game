'use strict';
/*console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //When ther is no iput
  if (!guessedNumber || guessedNumber > 20 || guessedNumber < 1) {
    // document.querySelector('.message').textContent ='⛔ Enter a value between [1-20]';
    displayMessage('⛔ Enter a value between [1-20]');
    // When player wins
  } else if (guessedNumber === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if the guessed number is wrong
  else if (guessedNumber !== secretNumber) {
    if (gameScore > 1) {
      // document.querySelector('.message').textContent = guessedNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(
        guessedNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      gameScore = gameScore - 1;
      document.querySelector('.score').textContent = gameScore;
    } else {
      // document.querySelector('.message').textContent ='💥 You Lost the game !';
      displayMessage('💥 You Lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.location.reload(true);
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
