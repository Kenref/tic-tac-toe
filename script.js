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
    // add if there isnt already and o or x there
    function playTurn(location) {
        if (activePlayer == 1) {
            player1.placeMarkerInArray(location)
            gameBoard.squares[location - 1].textContent = "X"
        } else {
            player2.placeMarkerInArray(location)
            gameBoard.squares[location - 1].textContent = "O";
        }        
        checkWin()
        switchPlayerTurn()
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
        let winner = false

        for (let i = 0; i < winningNumbers.length; i++) {
            let [a, b, c] = winningNumbers[i];
            if (grid[a - 1] === "X" && grid[b - 1] === "X" && grid[c - 1] === "X") {
                console.log("Player 1 wins!");
                winner = true
            }
            else if (grid[a - 1] === "O" && grid[b - 1] === "O" && grid[c - 1] === "O") {
                console.log("Player 2 wins!");
                winner = true
            }
        }
        if ((isNoMoreNumbers() == true) && (winner == false)) {
            console.log("TIE")
        }
    }

    function placeMarkerOnBoard(e, marker) {
		if (e.target.textContent !== "X" && e.target.textContent !== "O") {
			e.target.textContent = marker;
			playTurn(e.target.classList[1]);
			console.log(gameBoard.grid);
		}
	}

    const squares = gameBoard.squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function (e) {
            if (activePlayer === 1) {
                placeMarkerOnBoard(e, "X");
            } else {
                placeMarkerOnBoard(e, "O");
            }
        });
    }




    let firstPlayer = startingPlayer()
    let player1 = playerFactory(firstPlayer, "X")
    let player2 = playerFactory(firstPlayer === 1 ? 2 : 1, "O")
    let activePlayer = setActivePlayer(firstPlayer)


    console.log(gameBoard.grid)










    return {
        placeMarkerOnBoard,
        playTurn,
        isNoMoreNumbers,
    }
})();













// add "and still" and "and new" when the game is over



