const gameBoard = (() => {
    const cells = [" ", " ", " "," ", " ", " ", " ", " ", " "];
    const gameBoardDiv = document.querySelector('#gameBoard');
    const createBoard = cells.forEach(() => {
        const cellButton = document.createElement('button');
        cellButton.classList.add('cell');
        gameBoardDiv.appendChild(cellButton);
    });
    
    return {createBoard};    
})();

const gameFlow = (() => {
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const actualPlayer = player1 ? player2 : player1;


})();
