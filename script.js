"use strict";

// Player name setup
const userName1 = document.querySelector(".user-name-1");
const userName2 = document.querySelector(".user-name-2");

document.querySelector(".start").addEventListener("click", function () {
    if (userName1.value.trim() !== "" && userName2.value.trim() !== "") {
        document.querySelector(".p1 h3").textContent = userName1.value;
        document.querySelector(".p2 h3").textContent = userName2.value;

        document.querySelector(".inf-player").style.display = "none";
        document.querySelector(".bg").style.display = "none";

        userName1.value = "";
        userName2.value = "";
    }
});

// Game variables
const user1RollBtn = document.querySelector(".btn-play-1");
const user2RollBtn = document.querySelector(".btn-play-2");
const user1HoldBtn = document.querySelector(".p1 .btn-hold");
const user2HoldBtn = document.querySelector(".p2 .btn-hold");
const rollDiceSquare = document.querySelector(".roll-dice h1");

let turn = "player1";
let scores = { player1: 0, player2: 0 };
let currentScores = { player1: 0, player2: 0 };
const winningScore = 20; // winning score

// Initialize buttons
user1RollBtn.disabled = false;
user2RollBtn.disabled = true;
user1HoldBtn.disabled = false;
user2HoldBtn.disabled = true;

// Switch active player
function switchTurn() {
    if (turn === "player1") {
        turn = "player2";
        user1RollBtn.disabled = true;
        user2RollBtn.disabled = false;
        user1HoldBtn.disabled = true;
        user2HoldBtn.disabled = false;
        document.querySelector(".p1").classList.remove("active");
        document.querySelector(".p2").classList.add("active");
    } else {
        turn = "player1";
        user1RollBtn.disabled = false;
        user2RollBtn.disabled = true;
        user1HoldBtn.disabled = false;
        user2HoldBtn.disabled = true;
        document.querySelector(".p1").classList.add("active");
        document.querySelector(".p2").classList.remove("active");
    }
}

// Roll dice logic
function rollDice(player) {
    const dice = Math.floor(Math.random() * 6) + 1;
    rollDiceSquare.textContent = dice;

    const currentBox = document.querySelector(`.current-box-${player === "player1" ? 1 : 2} h2`);

    if (dice === 1) {
        currentScores[player] = 0;
        currentBox.textContent = 0;
        switchTurn();
    } else {
        currentScores[player] += dice;
        currentBox.textContent = currentScores[player];
    }
}

user1RollBtn.addEventListener("click", () => {
    if (turn === "player1") rollDice("player1");
});

user2RollBtn.addEventListener("click", () => {
    if (turn === "player2") rollDice("player2");
});

// Hold buttons
function holdScore(player) {
    scores[player] += currentScores[player];
    document.querySelector(`.player.${player} .score h1`).textContent = scores[player];

    if (scores[player] >= winningScore) {
        alert(`${document.querySelector(`.player.${player} h3`).textContent} wins!`);
        resetGame();
    } else {
        currentScores[player] = 0;
        document.querySelector(`.current-box-${player === "player1" ? 1 : 2} h2`).textContent = 0;
        switchTurn();
    }
}

user1HoldBtn.addEventListener("click", () => holdScore("player1"));
user2HoldBtn.addEventListener("click", () => holdScore("player2"));

// Reset game
function resetGame() {
    scores.player1 = 0;
    scores.player2 = 0;
    currentScores.player1 = 0;
    currentScores.player2 = 0;

    document.querySelector(".p1 .score h1").textContent = "0";
    document.querySelector(".p2 .score h1").textContent = "0";
    document.querySelector(".current-box-1 h2").textContent = "0";
    document.querySelector(".current-box-2 h2").textContent = "0";

    turn = "player1";
    user1RollBtn.disabled = false;
    user2RollBtn.disabled = true;
    user1HoldBtn.disabled = false;
    user2HoldBtn.disabled = true;

    document.querySelector(".p1").classList.add("active");
    document.querySelector(".p2").classList.remove("active");
}
