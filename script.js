"use strict";
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");
let point1 = document.querySelector(".points-1");
let point2 = document.querySelector(".points-2");
let message1 = document.querySelector(".msg-1");
let message2 = document.querySelector(".msg-2");
const cardRandom = document.querySelector(".random-card");
let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let winBox = document.querySelector(".winner-box");
let overlay = document.querySelector(".overlay");
let btnCloseWinner = document.querySelector(".close-winner");
let btnNewGame = document.querySelector(".btn-new-game");

const randomNumbers = [];
randomNumbers[0] = 6;
point1.textContent = 0;
point2.textContent = 0;
let activePlayer = 1;
let playing = true;

const winningCondition = function () {
  if (document.querySelector(`.points-${activePlayer}`).textContent == 15) {
    winBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
    playing = false;
  }
};

const hideElements = function () {
  winBox.classList.add("hidden");
  overlay.classList.add("hidden");
};

const plusCondition = function () {
  if (playing) {
    const card = Math.trunc(Math.random() * 13) + 1;
    cardRandom.src = `card-${card}.png`;
    randomNumbers.unshift(card);
    randomNumbers.splice(2);
    if (card >= randomNumbers[1]) {
      document.querySelector(`.points-${activePlayer}`).textContent++;
      document.querySelector(`.msg-${activePlayer}`).textContent =
        "You are Correct! + 1";
      winningCondition();
    } else {
      document.querySelector(`.msg-${activePlayer}`).textContent =
        "Wrong Guess! Player Changed!";
      activePlayer = activePlayer === 1 ? 2 : 1;
      document.querySelector(".player-1").classList.toggle("player-active");
      document.querySelector(".player-2").classList.toggle("player-active");
    }
  }
};

const minusCondition = function () {
  if (playing) {
    const card = Math.trunc(Math.random() * 13) + 1;
    cardRandom.src = `card-${card}.png`;
    randomNumbers.unshift(card);
    randomNumbers.splice(2);
    if (card <= randomNumbers[1]) {
      document.querySelector(`.points-${activePlayer}`).textContent++;
      document.querySelector(`.msg-${activePlayer}`).textContent =
        "You are Correct! + 1";
      winningCondition();
    } else {
      document.querySelector(`.msg-${activePlayer}`).textContent =
        "Wrong Guess! Player Changed!";
      activePlayer = activePlayer === 1 ? 2 : 1;
      document.querySelector(".player-1").classList.toggle("player-active");
      document.querySelector(".player-2").classList.toggle("player-active");
    }
  }
};

btnPlus.addEventListener("click", plusCondition);

btnMinus.addEventListener("click", minusCondition);

btnCloseWinner.addEventListener("click", hideElements);

btnNewGame.addEventListener("click", function () {
  hideElements();
  player1.classList.add("player-active");
  point1.textContent = 0;
  point2.textContent = 0;
  document.querySelector(".msg-1").textContent = "Next Card - Higher or Lower?";
  document.querySelector(".msg-2").textContent = "Next Card - Higher or Lower?";
  playing = true;
});
