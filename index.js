//set up gameboard/ new gameboard
let board = []
let player1 = {}
let player2 = {}
let symbol = ""
const playerFactory = (name, symbol) => {
    return {name, symbol}
}

//add gameBoard object (Module)
const gameBoard = (() => {
    const newBoard = () => {
        for (i = 0; i < 9; i++){
        board[i] = " ";
        }
        displayBoard();
    }
    const displayBoard = () => {
        for(i = 0; i<board.length ; i++ ){
            const gridPosition = document.getElementById("grid-" + i)
            console.log(gridPosition)
            gridPosition.innerHTML = board[i]
        }
    }
    displayBoard();
    return {board, newBoard, displayBoard}
})()

const game = (() => {
    //player action
    const startButton = () => {
        const player1name = document.getElementById("player1").value;
        const player2name = document.getElementById("player2").value;
        boardElement = document.querySelector(".board");
        boardElement.classList.remove("hide")
        player1 = playerFactory(player1name,"X")
        player2 = playerFactory(player2name,"O")
        console.log(player1.symbol)
        console.log(typeof player1.symbol)
        symbol = player1.symbol;
    }

    const playerMove = (val) => {
        gridValue = document.getElementById(val).innerHTML;
        if (gridValue != " ") {
            return false;
        }
        console.log(symbol)
        console.log(player1.symbol)
        val = val.slice(-1)
        board[val]=symbol
        gameBoard.displayBoard()
        if (symbol == player1.symbol) {
            symbol = player2.symbol
        } else {
            symbol = player1.symbol;
        }
    }
    
  /*  const playerMove = (val) => {
        if (symbol != player1.symbol || symbol != player2.symbol ) {
             symbol = player1.symbol;
        }
        gridValue = document.getElementById(val).innerHTML;
        console.log(gridValue)
        console.log(symbol)
        if(gridValue == ' '){
            val = val.slice(-1)
            board[val] = symbol;
            gameBoard.displayBoard();
            if (symbol == player1.symbol) {
                symbol = player2.symbol;
            } else {
                symbol = player1.symbol;
            }
        }
    }*/
    return {playerMove, startButton}
})()



//player object

//game state object
const gameFactory = () => {

}




gameBoard.newBoard()