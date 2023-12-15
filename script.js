let contentdice;

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
return;
};
currentPlayer.innerHTML = lancer; //Met à jour la valeur player
return lancer;//retourne la valeur de la fonction
};

//Fonction pour le score du round
function roundScore() {
let valeurLancer = lancedés(1,6);

if (valeurLancer === 1) {
    total = 0;
    currentRound.innerHTML = total; // Réinitialise le score round actuel
    if (currentPlayer === player1) {
        currentPlayer = player2; 
        currentRound = round2; // Passe la main à player2 après que player1 obtient 1
    } else {
    currentPlayer = player1;
    currentRound = round1; // Passe la main à player1 après que player2 obtient 1
    }
} else {
total += valeurLancer; //Additionne les valeurs entre elles à chaque déclanchement
};

currentRound.innerHTML = total;
};

roll.onclick = function () {
lancedés(1,6);
roundScore();
};