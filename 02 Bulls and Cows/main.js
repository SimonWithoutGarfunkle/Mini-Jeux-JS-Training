let attemps = 0;
let bulls = 0;
let cows = 0;
let secretNumber = generateSecretNumber();
console.log(`secret number is : ${secretNumber}`);

let roundStats = {
    round: 1,
    wins: 0,
    loses: 0
}

function printGameStats() {
    const gameStats = document.getElementById("gameStats");
    gameStats.innerHTML= `Round: ${roundStats.round} | W: ${roundStats.wins} - L: ${roundStats.loses}`

}

function playAgain() {
    roundStats.round ++;
    printGameStats;
    attemps=0; bulls=0; cows=0;
    secretNumber =generateSecretNumber();

}

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let secretString = secretNumber.join('');
    bulls=0; cows=0;
    const checkGuessLength = new Set(guess)

    if (guess.length !== 4 || new Set(guess).size !== 4) {
        document.getElementById("logsArea").value += `${guess} est invalide, veuillez entrer un nombre composé de 4 chiffres différents. \n`;
        return null;
    }

    attemps++;

    for (let i=0; i < 4; i++) {
        if (secretString[i] === guess[i]) {
            bulls++;
        } else if (secretString.includes(guess[i])) {
            cows++;
        }
    }

    if (bulls === 4 ) {
        document.getElementById("logsArea").value += `GG ${secretString} était bien la bonne réponse! Vous avez gagné en ${attemps} coups. \n`;
        roundStats.wins++;
        return playAgain();
    } else if (attemps === 10 ) {
        document.getElementById("logsArea").value += `Perdu :( La bonne réponse était ${secretString}. \n`;
        roundStats.loses++;
        return playAgain();
    }

    document.getElementById("logsArea").value += `${guess} - ${bulls}B ${cows}C, try: ${attemps} \n`;
    printGameStats();

}

function printRules() {
    alert("Entrez un nombre composé de 4 chiffres différents dans la case à coté de 'Guess'. L'ordinateur le compare avec le code secret et vous donne deux indices : les numéros 'Bulls' (B) et des 'cows' (C). Un 'bulls' est un chiffre qui est présent dans les 2 codes à la même position. Un 'cows' est un chiffre présent mais à une position différente. Par exemple, si le code secret est 7512 et que vous essayez 5392, la réponse sera '1B 1C'. Et voila ! ");
}

function clearLogs() {
    document.getElementById("logsArea").value = "";
}

function generateSecretNumber() {
    return Array.from({ length: 9}, (v, k) => k + 1)
    .sort(() => Math.random() - 0.5).slice(0, 4);
}