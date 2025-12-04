"use strict";
// Selecting input fields for user names
const userName1 = document.querySelector(".user-name-1");
const userName2 = document.querySelector(".user-name-2");

document.querySelector(".start").addEventListener("click", function () {

    if (userName1.value.trim() !== "" && userName2.value.trim() !== "") {
        const p1NameEl = document.querySelector(".p1 h3");
        const p2NameEl = document.querySelector(".p2 h3");
        if (p1NameEl) p1NameEl.textContent = userName1.value;
        if (p2NameEl) p2NameEl.textContent = userName2.value;

        const inf = document.querySelector(".inf-player");
        const bg = document.querySelector(".bg");
        if (inf) inf.style.display = "none";
        if (bg) bg.style.display = "none";

        userName1.value = "";
        userName2.value = "";
    }
});

// Play roll dice for users
const user1RollBtn = document.querySelector(".btn-play-1");
const user2RollBtn = document.querySelector(".btn-play-2");
const rollDiceSauqre = document.querySelector(".roll-dice");



user1RollBtn.addEventListener("click", function () {
    var randomRolldice = Math.floor(Math.random() * 6) + 1;

    rollDiceSauqre.textContent = randomRolldice;
});

user2RollBtn.addEventListener("click", function () {
    var randomRolldice = Math.floor(Math.random() * 6) + 1;

    rollDiceSauqre.textContent = randomRolldice;
});