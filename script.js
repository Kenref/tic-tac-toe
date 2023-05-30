//module -----------------------
const gameBoard = (function () {
    "use strict";
    const squares = document.getElementsByClassName("square")
    const grid = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];


    return {
        grid,  
        squares
    }
})();


//factory----------------------
function playerFactory(playerNumber, marker) {
    function placeMarker(position) {
        gameBoard.grid.splice((position - 1), 1, marker);
    }
    return {
        playerNumber,
        marker,
        placeMarker
    }
}

//module ------------------
const gameController = (function() {
    function startingPlayer() {
        if ((Math.floor(Math.random() * 2) + 1) == 1) {
            console.log("player 1 is starting")
            let firstPlayer = 1
            return firstPlayer
        } else {
            console.log("Player 2 is starting")
            let firstPlayer = 2
            return firstPlayer
        }
    }

    function switchPlayerTurn() {
        if (activePlayer === 1) {
            activePlayer = 2
            return activePlayer
        } else {
            activePlayer = 1
            return activePlayer
        }
    }

    function setActivePlayer(firstPlayer) {
        if (firstPlayer === 1) {
            let activePlayer = 1
            return activePlayer
        } else {
            let activePlayer = 2
            return activePlayer
        }
    }

    function playTurn(location) {
        if (activePlayer == 1) {
            player1.placeMarker(location)
        } else {
            player2.placeMarker(location)
        }
        console.log(gameBoard.grid);
        checkWin()
        switchPlayerTurn()

    }

    function checkWin() {
        let winningNumbers = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];
        let grid = gameBoard.grid;

        for (let i = 0; i < winningNumbers.length; i++) {
            let [a, b, c] = winningNumbers[i];

            if (grid[a - 1] === "X" && grid[b - 1] === "X" && grid[c - 1] === "X") {
                console.log("Player 1 wins!");
                return;
            }

            if (grid[a - 1] === "O" && grid[b - 1] === "O" && grid[c - 1] === "O") {
                console.log("Player 2 wins!");
                return;
            }
        }

        // console.log("No winner yet.");
    }






    let firstPlayer = startingPlayer()
    let player1 = playerFactory(firstPlayer, "X")
    let player2 = playerFactory(firstPlayer === 1 ? 2 : 1, "O")
    let activePlayer = setActivePlayer(firstPlayer)


    console.log(gameBoard.grid)
    playTurn(4)




 // if the array has either x or O then it cannot be changed at that specific spot






    return {

    }
})();













// add "and still" and "and new" when the game is over



