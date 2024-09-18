let randomNum = parseInt(Math.random() * 100 + 1)
//console.log(randomNum)

const input = document.querySelector('#guessField')
const button = document.querySelector('#subt')
const resultPara = document.querySelector('.resultParas')
const previousGuess = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')

let guesses = []
let guessNum = 1

let playGame = true
const p = document.createElement('p')

if(playGame){
  button.addEventListener('click', function(e){
    e.preventDefault();

    const guess = parseInt(input.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('enter a valid number');
  }else if(guess < 0){
    alert('enter the number greater than 0');
  }else if(guess > 101){
    alert('enter the number less than 101');
  }else{
    guesses.push(guess)
    if(guessNum === 10){
      displayGuess(guess);
      displayMessage(`Game over. The number was ${randomNum}`);
      endGame();
    }else{
      checkGuess(guess);
      displayGuess(guess); 
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage('You won!!');
    endGame();
  }else if(guess < randomNum){
    displayMessage('The number is too Small');
  }else if(guess > randomNum){
    displayMessage('The number is too Big');
  }
}

function displayGuess(guess){
  input.value = '';
  previousGuess.innerHTML += `${guess},`;
  guessNum++;
  remainGuess.innerHTML = `${11-guessNum}`;
}

function displayMessage(message){
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  input.innerHTML = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 class="newGame" style="active">Start New Game</h2>';
  resultPara.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const start = document.querySelector('.newGame')
  start.addEventListener('click', function(e){
    e.preventDefault();
    randomNum = parseInt(Math.random() * 100 + 1);
    //console.log(randomNum)
    guesses = [];
    guessNum = 1;
    previousGuess.innerHTML = '';
    remainGuess.innerHTML = `${11-guessNum}`;
    input.removeAttribute('disabled');

    playGame = true
  })
}