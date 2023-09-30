Jogo da velha:
regras normais.
Quadro do jogo: gameboard dentro de um arranjo, ativo quando escrevo os nomes dos jogadores
e clico em jogar.
2 jogadores, ff q define o nome e o marcador do jogador. Nome escrito no input
Flow do jogo: Jogo começa, alterna entre os jogadores, empate se não houver combinação de 3 e 
aparece a frase de empate, ganha se combinar 3, quando um vencer, aparecer a frase de vencedor. 
Depois de vencer/empatar, o jogo deve ser reiniciado e as marcações apagadas.

Modulo pro gameboard e flow, ff para os players.


gameboard: p1 e p2, start game > gera um quadrado pra cada item de cells
display: cells.forEach(() => {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cellDiv');
    gameBoard.appendChild(cellDiv);
})

gameFlow: Define jogador: input X e input O; Começa jogo: botão start game;  jogador X marca,
alterna para o jogador O; Condição de vitória e condição de empate. Botão de reiniciar. 

gameFlow: inicia o game: 