console.clear();

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");
    const winnerElement = document.querySelector(".winner");
    const restartButton = document.querySelector("#restartButton");

    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            updateSquare.bind(square)();

            let position = e.target.id;
            handlePlayerAction(position);

            if (gameOver) {
                winnerElement.textContent = `${playerName[winnerPlayer]} venceu! 🥳`;
                winnerElement.style.display = "block";

                restartButton.textContent = "Jogar Novamente";
            }
        });
    });

    function updateSquare() {
        if (this.classList.length === 1 && !gameOver) {
            let playerClass = playerTurn === 0 ? "player1" : "player2";
            this.classList.add(playerClass);
        }
    }

    restartButton.addEventListener("click", () => {
        console.clear();
        restartGame();
    });

    function restartGame() {
        clearBoard();
        resetPlayerTurn();
        resetGameOverState();
        squares.forEach((square) => {
            if (square.classList.length > 1) {
                let currentClass = square.classList[1];
                square.classList.remove(currentClass);
            }
        });
        winnerElement.style.display = "none";
        restartButton.textContent = "Recomeçar";
    }
});


function typingEffect() {
    const contactTexts = shuffleArray(['Bem-vindo e divirta-se!😊', 'Pense bem no lance 😄', 'Bom jogo!', 'Estou na torcida!🤗', 'Linkedin/Github: maurilosantos👍']);
    const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { 
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        if (char == contactTexts[idx].length + 15) removing = true;

        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; 
        if (typedtext.innerHTML.length === 0) {

            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; 
            removing = false; 
        }

    }, 150);

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}