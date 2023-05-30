//module -----------------------
const gameBoard = (function () {
    "use strict";

    const grid = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];
    



    return {
        grid,
        
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
        checkWin()
        switchPlayerTurn()
        console.log(gameBoard.grid)
    }

    function checkWin(marker) {
        let winningNumbers = [123, 456, 789, 147, 258, 369, 159, 357]
        let grid = gameBoard.grid

        if (grid.includes("X", 8, 8)) {
            console.log("winner is x")
        }
        


            
    }





    let firstPlayer = startingPlayer()
    let player1 = playerFactory(firstPlayer, "X")
    let player2 = playerFactory(firstPlayer === 1 ? 2 : 1, "O")
    let activePlayer = setActivePlayer(firstPlayer)


    console.log(gameBoard.grid)
    // playTurn(1)
    // playTurn(5)
    // playTurn(2)
    // playTurn(7)
    // playTurn(3)




 // if the array has either x or O then it cannot be changed at that specific spot






    return {
        playTurn
    }
})();













// add "and still" and "and new" when the game is over



