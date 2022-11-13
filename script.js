const newgame = document.getElementById('new-game');
const dice = document.getElementsByClassName('dice');
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

console.log(lancer);