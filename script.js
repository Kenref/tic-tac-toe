//module -----------------------
const gameBoard = (function () {
    "use strict";

    const grid = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];
    
    function placeMarker(position, marker) {
        grid.splice(position, 1, marker)
    }


    return {
        grid,
        placeMarker
    }



})();
//-------------------------

//module ------------------
const gameController = (function () {
    function startingPlayer() {
        if ((Math.floor(Math.random() * 2) + 1) == 1) {
            let startingPlayer = 1
            return startingPlayer
        };
        let startingPlayer = 2
        return startingPlayer
    }

    function switchPlayerTurn() {

    }



    //check player win: if either player has 123, 456, 789, 147, 258, 369, 159, 357 in any order. try using an array for each player




    return {
        startingPlayer
    }
})();
//---------------------------

//factory----------------------
function player(playerNumber, symbol) {
    return { playerNumber, symbol}
    
}
//----------------------------



// function calls
console.log(gameBoard.grid)
console.log(gameController.startingPlayer())














// add "and still" and "and new" when the game is over



