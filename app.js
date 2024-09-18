function createPlayer (playerID, playerSymbol){
    return {playerID, playerSymbol}
}

function createGameBoard () {
    let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    return {board};
}

//winner function - refer to notes
function createControl(board){
    const move = (player, position) => {
           symbol = player.playerSymbol
           board.board[position[0]][position[1]] = symbol
    }
    return {board, move}
}

const playerX = createPlayer("playerX", "X")
const playerO = createPlayer("playerO", "O")
const gameBoard = createGameBoard()


control = createControl(gameBoard)
control.move(playerO, [1, 2])
control.move(playerO, [1,1])
control.move(playerO, [1,0])
console.log(control.board)
