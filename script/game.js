// declarar minhas variáveis
let board = ["", "", "", "", "", "", "", "", ""];
let playerTurn = 0;
const playerSymbol = ["o", "x"];
const playerName = ["Pokébola", "Pikachu"];
let gameOver = false;
let winnerPlayer = "";
const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handlePlayerAction(position) {
    if (gameOver) {
        return;
    }

    if (board[position] === "") {
        board[position] = playerSymbol[playerTurn];

        gameOver = gameHasWinner();
        winnerPlayer = playerTurn;

        playerTurn = playerTurn === 0 ? 1 : 0;
    }
}

function gameHasWinner() {
    for (let state of winStates) {
        if (
            board[state[0]] !== "" &&
            board[state[0]] === board[state[1]] &&
            board[state[0]] === board[state[2]]
        ) {
            return true;
        }
    }

    return false;
}

function clearBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
}

function resetPlayerTurn() {
    playerTurn = 0;
}

function resetGameOverState() {
    gameOver = false;
}