const GameBoard = (() => {

    let cells = ["", "", "", "", "", "", "","",""]

    const render = () => {
        let boardHTML = "";
        cells.forEach((cell, index) => {
            boardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        })
        document.querySelector('#gameBoard').innerHTML = boardHTML;
        const cellClick = document.querySelectorAll('.cell');
        cellClick.forEach((i) => {
            i.addEventListener('click',() => Game.manageClick(i));
        }
        );
    };

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
        console.log(cellClick.id);
    }

    return {
        start,
        manageClick
    }
})();

let startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => Game.start());
