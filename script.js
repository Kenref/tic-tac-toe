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
    function placeMarker(position, marker) {
        gameBoard.grid.splice(position, 1, marker);
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
            let secondPlayer = 2
            return { firstPlayer, secondPlayer }
        } else {
            console.log("Playeer 2 is starting")
            let firstPlayer = 2
            let secondPlayer = 1
            return { firstPlayer, secondPlayer }
        }
    }

    function switchPlayerTurn() {
        if (activePlayer == 1) {
            activePlayer = 2
            return activePlayer
        } else {
            activePlayer = 1
            return activePlayer
        }
    }

    function setActivePlayer() {
        if (firstPlayer == 1) {
            let activePlayer = 1
            return activePlayer
        } else {
            let activePlayer = 2
            return activePlayer
        }
    }

    //check player win: if either player has 123, 456, 789, 147, 258, 369, 159, 357 in any order. try using an array for each player




    let {firstPlayer, secondPlayer} = startingPlayer()
    const player1 = playerFactory(firstPlayer, "X")
    const player2 = playerFactory(secondPlayer, "O")
    let activePlayer = setActivePlayer()



 


    console.log(gameBoard.grid)
    console.log(player1.playerNumber, player1.marker)
    console.log(player2.playerNumber, player2.marker)

    player1.placeMarker(4, "X")
    console.log(gameBoard.grid)



    return {

    }
})();





// function calls
// gameController.startingPlayer()
// console.log(gameController.firstPlayer, "first player")
// gameController.setActivePlayer()
// console.log(gameController.activePlayer, "active player")

// gameController.switchPlayerTurn(activePlayer)
// console.log(gameController.activePlayer, "active")












// add "and still" and "and new" when the game is over



