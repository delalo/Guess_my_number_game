'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

let displayMessage = function ( message ){
  document.querySelector('.message').textContent = message

}
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // when there is no input

    document.querySelector('.message').textContent = ' 💀 No number!';
  }
  //    when the player wins
  else if (guess === secretNumber) {
    displayMessage( '🎉 Correct number!')
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

  }

    // when the guess is not equall to the secret number
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage( guess > secretNumber ? '📈 Too high !' : '📉 Too low !')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage(' 😢 You lost the game  !')
        document.querySelector('.score').textContent = 0;
      }
    }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  displayMessage( 'Start guessing ...')
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '? ';
  document.querySelector('.guess').value = ' ';
});
