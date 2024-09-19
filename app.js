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
    const checkWinner = (playerX, playerO) => {
        //check each consecutive 3 for all X or all O and return 1 or 0 and playerID
        let gameStatus = 0;
        let winner = null;
        //check each row and column combo
        for (i = 0; i <3; i++){
            if (board.board[i][0] === "O" &&
                board.board[i][0] === board.board[i][1] &&
                board.board[i][0] === board.board[i][2]){
                    gameStatus = 1; //gameover
                    winner = playerO
            }
            else if (board.board[i][0] === "X" &&
                board.board[i][0] === board.board[i][1] &&
                board.board[i][0] === board.board[i][2]){
                    gameStatus = 1; //gameover
                    winner = playerX
            }
        }
        if (gameStatus === 0){
            if(board.board[0][0] === "O" &&
                board.board[1][1] === "O" &&
                board.board[2][2] === "O"){
                    gameStatus = 1; //gameover
                    winner = playerO
                    }
            else if (board.board[2][0] === "O" &&
                board.board[1][1] === "O" &&
                board.board[2][0] === "O"){
                    gameStatus = 1; //gameover
                    winner = playerO
                    }
            else if(board.board[0][0] === "X" &&
                board.board[1][1] === "X" &&
                board.board[2][2] === "X"){
                    gameStatus = 1; //gameover
                    winner = playerX
                    }
            else if (board.board[2][0] === "X" &&
                board.board[1][1] === "X" &&
                board.board[2][0] === "X"){
                    gameStatus = 1; //gameover
                    winner = playerX
                    }
                    

        }
        return {gameStatus, winner}
    }
    return {board, move, checkWinner}
}

const playerX = createPlayer("playerX", "X")
const playerO = createPlayer("playerO", "O")
const gameBoard = createGameBoard()


control = createControl(gameBoard)
control.move(playerX, [0, 0])
control.move(playerX, [1,1])
control.move(playerX, [2,2])
console.log(gameBoard.board)
console.log(control.checkWinner(playerX, playerO))