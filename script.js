const wordDOM = document.getElementById('word');
const textInput = document.getElementById('text');
const scoreDOM = document.getElementById('score');
const timeDOM = document.getElementById('time');
const endGameDOM = document.getElementById('end-game-container');
const btnSettings = document.getElementById('btn-settings');
const settingsDOM = document.getElementById('settings');
const difficultySelect = document.getElementById('form-difficulty');

// List of words
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'walike',
  'bad', 
  'north', 
  'dependent',
  'loving'
]

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
textInput.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Get random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  wordDOM.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreDOM.innerHTML = score
}

// Update time
function updateTime() {
  time--;
  timeDOM.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);  
    
    // End game
    gameOver();
  }
}

// Game over, show end screen 
function gameOver () {

  endGameDOM.innerHTML  = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="window.location.reload()">Reload</button>
  `;

  endGameDOM.style.display = 'flex';
}

addWordToDOM();

// Event listeners
textInput.addEventListener('input', e => {  

  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear input
    e.target.value = '';

    time += 5;

    updateTime();
  }
});