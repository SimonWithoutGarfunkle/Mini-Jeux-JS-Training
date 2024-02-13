let wins = 0;
let loses = 0;
const choices = ["pierre", "papier", "ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const pierre = document.getElementById("rock");
const papier = document.getElementById("paper");
const ciseaux = document.getElementById("scissors");


function runGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];


    switch(userChoice + '_' + computerChoice) {
        case 'papier_ciseaux' :
        case 'pierre_papier' :
        case 'ciseaux_pierre':
            loses++;
            gameStatus.innerHTML = `Me: ${userChoice} | Co: ${computerChoice} -> C Wins`;
            break;
        case 'papier_pierre' :
        case 'pierre_ciseaux' :
        case 'ciseaux_papier':
            wins++;
            gameStatus.innerHTML = `Me: ${userChoice} | Co: ${computerChoice} -> M Wins`;
            break;
        case 'papier_papier' :
        case 'pierre_pierre' :
        case 'ciseaux_ciseaux':
            gameStatus.innerHTML = `Me: ${userChoice} | Co: ${computerChoice} -> Draw !`;
            break;
    }

    gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`;

}

pierre.addEventListener("click", () => runGame("pierre"));
papier.addEventListener("click", () => runGame("papier"));
ciseaux.addEventListener("click", () => runGame("ciseaux"));
