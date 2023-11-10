let randomnum = parseInt(Math.random() * 100 + 1);

const guessbox = document.getElementById('guessField');
const btn = document.getElementById('subt');
const prev = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult');
const comment = document.querySelector('.lowOrHi');
const div = document.querySelector('.resultParas');

const p = document.createElement('p');
let playgame = true;
let prevguess = [];
let numOfguess = 1;

if (playgame) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(guessbox.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert('please give a proper number');
  } else if (guess < 1) {
    alert('Number should not be lesser than 1');
  } else if (guess > 100) {
    alert('Number should not be greater than 100');
  } else {
    prevguess.push(guess);
    if (numOfguess === 10) {
      displayguess(guess);
      displaymsg(`game over the random number was ${randomnum}`);
      endgame();
    } else {
      displayguess(guess);
      check(guess);
    }
  }
}

function check(guess) {
  if (guess === randomnum) {
    endgame();
    displaymsg('you guessed it correctly');
  } else if (guess < randomnum) {
    displaymsg('number was too low');
  } else if (guess > randomnum) {
    displaymsg('number was too high');
  }
}

function displayguess(guess) {
  guessbox.value = '';
  prev.innerHTML += `${guess}, `;
  numOfguess++;
  rem.innerHTML = `${11 - numOfguess}`;
}

function displaymsg(msg) {
  comment.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
  guessbox.value = '';
  guessbox.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newgame">Start New Game</h2>';
  div.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  document.querySelector('#newgame').addEventListener('click', function (e) {
    randomnum = parseInt(Math.random() * 100 + 1);
    numOfguess = 1;
    prevguess = [];
    prev.innerHTML = '';
    rem.innerHTML = `${11 - numOfguess}`;
    guessbox.removeAttribute('disabled');
    div.removeChild(p);
    playgame = true;
  });
}
