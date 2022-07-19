'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23);
*/

//math is object that javascript

//it random from 1 to 20
let secretNumber= Math.trunc(Math.random()* 20) +1; 
let score = 20;
let hightscore=0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
  document.querySelector('.score').textContent= score;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input
  if(!guess){
    displayMessage('⛔️ No Number!');
  }

  // when player win
  else if (guess === secretNumber){
    displayMessage('🎉 Corret Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor= '#ff5c8d';
    document.querySelector('.number').style.width ='30rem';

    if (score > hightscore){
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  }

  //when guess is wrong
  else if(guess !== secretNumber){
    if (score >1){
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score --;
      displayScore(score);
    }
    else{
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
}
/*
  //when guess is to high
  else if(guess > secretNumber ){
    if(score >1){
      document.querySelector('.message').textContent ='Too high!';
    score --;
    document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent ='You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the guess is too low
  else if(guess < secretNumber){
    if (score >1){
      document.querySelector('.message').textContent ='Too low!';
    score --;
    document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent ='You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
})
// button again for click the button may be start again the game
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) +1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#890f07';
  document.querySelector('.number').style.width = '15rem';
});

