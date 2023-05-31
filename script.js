//module -----------------------
const gameBoard = (function () {
    "use strict";
    const squares = document.getElementsByClassName("square")


    const grid = [1,2,3,4,5,6,7,8,9];


    return {
        grid,  
        squares
    }
})();


//factory----------------------
function playerFactory(playerNumber, marker) {
    function placeMarkerInArray(position) {
        gameBoard.grid.splice((position - 1), 1, marker);
    }
    return {
        playerNumber,
        marker,
        placeMarkerInArray
    }
}

//module ------------------
const gameController = (function() {
    // function startingPlayer() {
    //     if ((Math.floor(Math.random() * 2) + 1) == 1) {
    //         console.log("player 1 is starting")
    //         let firstPlayer = 1
    //         return firstPlayer
    //     } else {
    //         console.log("Player 2 is starting")
    //         let firstPlayer = 2
    //         return firstPlayer
    //     }
    // }

    // function setActivePlayer(firstPlayer) {
    //     if (firstPlayer === 1) {
    //         let activePlayer = 1
    //         return activePlayer
    //     } else {
    //         let activePlayer = 2
    //         return activePlayer
    //     }
    // }

    function switchPlayerTurn() {
        if (activePlayer === 1) {
            activePlayer = 2
            return activePlayer
        } else {
            activePlayer = 1
            return activePlayer
        }
    }

    // add if there isnt already and o or x there
    function playTurn(location) {
        currentMarker = getCurrentMarker()
        if (activePlayer == 1) {
            player1.placeMarkerInArray(location)
            gameBoard.squares[location - 1].textContent = currentMarker
        } else {
            player2.placeMarkerInArray(location)
            gameBoard.squares[location - 1].textContent = currentMarker;
        }        
        checkWin()
        switchPlayerTurn()
    }

    function getCurrentMarker() {
        if (activePlayer === 1) {
            activeMarker = "X"
        } else {
            activeMarker = "O"
        }
        return activeMarker
    }

    function isNoMoreNumbers() {
        return gameBoard.grid.every(number => typeof number !== "number")
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
        let winner = false;

        for (let combination of winningNumbers) {
            let [a, b, c] = combination;
            let currentMarker = getCurrentMarker();
            if (
                grid[a - 1] === currentMarker &&
                grid[b - 1] === currentMarker &&
                grid[c - 1] === currentMarker
            ) {
                console.log(`Player ${activePlayer} Wins`);
                winner = true;
            }
        }
        if ((isNoMoreNumbers() == true) && (winner == false)) {
            console.log("TIE")
        }
    }

    //     for (let i = 0; i < winningNumbers.length; i++) {
    //         let [a, b, c] = winningNumbers[i];
    //         if (grid[a - 1] === "X" && grid[b - 1] === "X" && grid[c - 1] === "X") {
    //             console.log("Player 1 wins!");
    //             winner = true
    //         }
    //         else if (grid[a - 1] === "O" && grid[b - 1] === "O" && grid[c - 1] === "O") {
    //             console.log("Player 2 wins!");
    //             winner = true
    //         }
    //     }
    //     if ((isNoMoreNumbers() == true) && (winner == false)) {
    //         console.log("TIE")
    //     }
    // }

    function placeMarkerOnBoard(e, marker) {
		if (e.target.textContent !== "X" && e.target.textContent !== "O") {
			e.target.textContent = marker;
			playTurn(e.target.classList[1]);
		}
	}

    const squares = gameBoard.squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function (e) {
            if (activePlayer === 1) {
                placeMarkerOnBoard(e, getCurrentMarker());
            } else {
                placeMarkerOnBoard(e, getCurrentMarker());
            }
        });
    }




    let firstPlayer = 1
    let activePlayer = firstPlayer
    let player1 = playerFactory(1, "X")
    let player2 = playerFactory(2, "O")











    return {
        placeMarkerOnBoard,
        playTurn,
        isNoMoreNumbers,
        activePlayer,
        getCurrentMarker
        
    }
})();













// add "and still" and "and new" when the game is over



