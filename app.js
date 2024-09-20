function createPlayer (playerID, playerSymbol){
    return {playerID, playerSymbol}
}

function createGameBoard () {
    let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    return {board};
}

//winner function - refer to notes
function createControl(){
    const playerX = createPlayer("playerX", "X")
    const playerO = createPlayer("playerO", "O")
    let board = createGameBoard()
    const move = (player, position) => {
           let symbol = player.playerSymbol
           board.board[position[0]][position[1]] = symbol
           console.log(JSON.stringify(board.board))
    }
    const checkWinner = () => {
        //check each consecutive 3 for all X or all O and return 1 or 0 and playerID
        let gameStatus = 0;
        let winner = null;
        //check each row and column combo
        for (i = 0; i <3; i++){
            if (board.board[i][0] === "O" &&
                board.board[i][1] === "O" &&
                board.board[i][2] === "O"){
                    gameStatus = 1; //gameover
                    winner = playerO
            }
            else if (board.board[i][0] === "X" &&
                    board.board[i][1] === "X" &&
                    board.board[i][2] === "X"){
                        gameStatus = 1; //gameover
                        winner = playerX
            }
            if (board.board[0][i] === "O" &&
                board.board[1][i] === "O" &&
                board.board[2][i] === "O"){
                    gameStatus = 1; //gameover
                    winner = playerO
            }
            else if (board.board[0][i] === "X" &&
                    board.board[1][i] === "X" &&
                    board.board[2][i] === "X"){
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
                board.board[0][2] === "O"){
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
    return {board, move, checkWinner, playerX, playerO}
}


player = 0

indexConverterArray = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]]

control = createControl()

const squares = Array.from(document.querySelectorAll(".square"))
console.log(squares)

//add condition for if gamestatus is 1 to pop up modal
squares.forEach((square, index) => {
    square.addEventListener("click", () => {
    if (player === 0){
        let moveParams = indexConverterArray[index]
        control.move(control.playerO, moveParams)
        player = 1
        console.log(control.checkWinner(control.playerX, control.playerO))
        square.innerHTML = "O"
    }
    else if (player === 1){
        let moveParams = indexConverterArray[index]
        control.move(control.playerX, moveParams)
        player = 0
        console.log(control.checkWinner(control.playerX, control.playerO))
        square.innerHTML = "X"
    }
        
    })
})





// player = 0 //playerO
// while(control.checkWinner().gameStatus === 0){
//     if (player === 0){
//         let moveParams = prompt("O Player, enter row, column:")
//         moveParams = moveParams.split(",").map(Number)
//         control.move(control.playerO, moveParams)
//         player = 1
//         console.log(control.checkWinner(control.playerX, control.playerO))
//     }
//     else if (player === 1){
//         let moveParams = prompt("X Player, enter row, column:")
//         moveParams = moveParams.split(",").map(Number)
//         control.move(control.playerX, moveParams)
//         player = 0
//         console.log(control.checkWinner(control.playerX, control.playerO))
//     }

// }



