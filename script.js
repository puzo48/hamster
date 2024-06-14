// script.js
const startButton = document.getElementById('start-button');
const goose = document.getElementById('goose');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const gameContainer = document.getElementById('goose-container');

let score = 0;
let timer = 30;
let gameInterval;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    goose.classList.remove('hidden');
    score = 0;
    timer = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = timer;

    gameInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = timer;
            moveGoose();
        } else {
            endGame();
        }
    }, 1000);
}

function moveGoose() {
    const x = Math.random() * (gameContainer.clientWidth - goose.clientWidth);
    const y = Math.random() * (gameContainer.clientHeight - goose.clientHeight);
    goose.style.left = `${x}px`;
    goose.style.top = `${y}px`;
}

goose.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveGoose();
});

function endGame() {
    clearInterval(gameInterval);
    goose.classList.add('hidden');
    startButton.classList.remove('hidden');
    alert(`Game over! Your score is ${score}`);
}
