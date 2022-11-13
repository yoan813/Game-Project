const newgame = document.getElementById('new-game');
const dice = document.getElementById('facedice');
const player1 = document.getElementById('play1');
const player2 = document.getElementById('play2');
const round1 = document.getElementById('score1');
const round2 = document.getElementById('score2');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');

function lancedés(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let lancer = lancedés(1, 6);

let contentdice = dice.innerHTML

if (lancer == 1) {
    dice.innerHTML = "&#9856";
} else if (lancer == 2) {
    dice.innerHTML = "&#9857";
} else if (lancer == 3) {
    dice.innerHTML = "&#9858";
} else if (lancer == 4) {
    dice.innerHTML = "&#9859";
} else if (lancer == 5) {
    dice.innerHTML = "&#9860";
} else if (lancer == 6) {
    dice.innerHTML = "&#9861";
} else {
   alert("Une erreur c'est produite !")
};

console.log(lancer);

