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
            i.addEventListener("click", () => Game.manageClick(i));
        }
        );
    };

    const update = (index, value) => {
        cells[index] = value;
        render();
    }

    const getGameBoard = () => cells;

    return {render, update, getGameBoard}; 
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
        gameOver = false;
        currentPlayerIndex = 0;
        GameBoard.render();
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            GameBoard.update(i, "");
            GameBoard.render();
        }
    }

    const manageClick = (cellClicked) => {
        let index = parseInt(cellClicked.id.split('-')[1]);
        if (GameBoard.getGameBoard()[index] !== ""){
            return
        }
        GameBoard.update(index, players[currentPlayerIndex].mark);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    return {
        start,
        manageClick,
        restart,
    }
})();

const restartButton = document.querySelector('#restartButton');
restartButton.addEventListener('click', Game.restart);

const startButton = document.querySelector('#startButton');
startButton.addEventListener("click",() => Game.start());
