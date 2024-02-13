function guessNumber() {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * 10);

    prompt('Devinez un nombre entre 1 et 10 (inclus) !');

    while (playerGuess != numberToGuess) {
        playerGuess = prompt('Perdu :( Essayez à nouveau de déviner le nombre entre 1 et 10 !');
    }

    alert(`Félicitations! Vous avez trouvé ${numberToGuess} !`);
}

guessNumber();
