const GameBoard = (() => {
    let cells = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        cells.forEach((cell, index) => {
            boardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        })
        document.querySelector('#gameBoard').innerHTML = boardHTML;
    }
    return {render};
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark};
};

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, "X"),
            createPlayer(document.querySelector('#player2').value, "O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        GameBoard.render();
    }

    const manageClick = (cellClick) => {
        console.log(cellClick.target.id)
    }

    return {
        start,
        manageClick
    }
})();

let startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => Game.start());

let clickCell = document.querySelectorAll('.cell');
clickCell.addEventListener('click', Game.manageClick(clickCell));