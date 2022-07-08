const pgDisplay = document.getElementById('pg-display');
const pgContent = document.getElementById('pg-content');
const pgTitle = document.getElementById('pg-title');
const pgText = document.getElementById('pg-text');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let time = 0;
let beginInterval = '';

let clickStart = startBtn.addEventListener('click', startCount);
let clickStop = stopBtn.addEventListener('click', stopCount);
let clickReset = resetBtn.addEventListener('click', resetCount);

function startTimer() {
  time++;
  startBtn.textContent = 'START';
  pgContent.setAttribute('style', 'color: white; background-color: green; border-color: white; border-radius: 10px');
  pgContent.textContent = time + ' seconds';
  if (clickStop) {
    stopCount();
  }
}

function startCount() {
  beginInterval = setInterval(startTimer, 1000);
}

function stopCount() {
  clearInterval(beginInterval);
  pgContent.setAttribute('style', 'color: white; background-color: red; border-color: white; border-radius: 10px');
  pgContent.textContent = time + ' seconds';
  startBtn.textContent = 'RESUME';
}

function resetCount() {
  // clearInterval(beginInterval);
  // time = 0;
  window.location.reload();
}