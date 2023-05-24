//module
const gameBoard = (function () {
    "use strict";

    const gameboard = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ];
    
    function _private() {
        return gameboard
    }


    return {
        publicMethod: _private
    }



})();


// const gameController = (function () {


// })();

// //factory
// function player(playerNumber, symbol) {
//     return { playerNumber, symbol}
    
// }


// console.log(gameBoard.sendback())
gameBoard._private()
























// add "and still" and "and new" when the game is over



