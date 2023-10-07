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
            gameOver = false;
        }
    }

    const manageClick = (cellClicked) => {
        if (gameOver){
            return;
        };

        let index = parseInt(cellClicked.id.split('-')[1]);
        if (GameBoard.getGameBoard()[index] !== ""){
            return
        };

        GameBoard.update(index, players[currentPlayerIndex].mark);

        if (winCondition(GameBoard.getGameBoard())) {
            gameOver = true;
            alert(`${players[currentPlayerIndex].name} foi o vencedor!`);
        } else if (tieCondition(GameBoard.getGameBoard())) {
            gameOver = true;
            alert("É um empate!!!");
        }   
        
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };

    return {
        start,
        manageClick,
        restart,
    }
})();

function winCondition(board) {
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < combinations.length; i++){
        const [a, b, c] = combinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        };
    return false;
    };
};

function tieCondition(board) {
   return board.every((cell) => cell !== "")
};

const restartButton = document.querySelector('#restartButton');
restartButton.addEventListener('click', Game.restart);

const startButton = document.querySelector('#startButton');
startButton.addEventListener("click",() => Game.start());