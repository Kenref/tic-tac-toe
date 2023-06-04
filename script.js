//module -----------------------
const gameBoard = (function () {
	"use strict";
	const squares = document.getElementsByClassName("square");

	let grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	function resetGame() {
		for (let i = 0; i < squares.length; i++) {
			squares[i].textContent = "";
			grid[i] = i + 1;
		}
		gameController.activateClick();
	}

	return {
		grid,
		squares,
		resetGame,
	};
})();

//factory----------------------
function playerFactory(playerNumber, marker) {
	function placeMarkerInArray(position) {
		gameBoard.grid.splice(position - 1, 1, marker);
	}
	return {
		playerNumber,
		marker,
		placeMarkerInArray,
	};
}

//module ------------------
const gameController = (function () {
	function switchPlayerTurn() {
		if (activePlayer === 1) {
			activePlayer = 2;
			return activePlayer;
		} else {
			activePlayer = 1;
			return activePlayer;
		}
	}

	function playTurn(location) {
		currentMarker = getCurrentMarker();
		if (activePlayer == 1) {
			player1.placeMarkerInArray(location);
			gameBoard.squares[location - 1].textContent = currentMarker;
		} else {
			player2.placeMarkerInArray(location);
			gameBoard.squares[location - 1].textContent = currentMarker;
		}
		checkWin();
		switchPlayerTurn();
	}

	function getCurrentMarker() {
		let activeMarker;
		if (activePlayer === 1) {
			activeMarker = "X";
		} else {
			activeMarker = "O";
		}
		return activeMarker;
	}

	function isNoMoreNumbers() {
		return gameBoard.grid.every((number) => typeof number !== "number");
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
				deactivateClick();
				showModal()
				break;
			}
		}
		if (isNoMoreNumbers() == true && winner == false) {
			console.log("TIE");
			deactivateClick();
			showModal()
		}
	}

	function placeMarkerOnBoard(e, activeMarker) {
		if (e.target.textContent !== "X" && e.target.textContent !== "O") {
			e.target.textContent = activeMarker;
			playTurn(e.target.classList[1]);
		}
	}

	function activateClick() {
		const squares = gameBoard.squares;
		for (let i = 0; i < squares.length; i++) {
			squares[i].addEventListener("click", functionNamer);
		}
	}

	// make it so that the activateClick function can be called and deactivated from deactivateClick function
	function functionNamer(e) {
		placeMarkerOnBoard(e, getCurrentMarker());
	}

	function deactivateClick() {
		const squares = gameBoard.squares;
		for (let i = 0; i < squares.length; i++) {
			squares[i].removeEventListener("click", functionNamer);
		}
	}

	function showModal() {
		const modal = document.querySelector("#modal")
		modal.showModal()
	}

	// function hideModal() {
	// 	const modal = document.querySelector("#modal")
	// 	modal.hideModal()
	// }

	let firstPlayer = 1;
	let activePlayer = firstPlayer;
	let player1 = playerFactory(1, "X");
	let player2 = playerFactory(2, "O");
	activateClick();

	return {
		placeMarkerOnBoard,
		playTurn,
		isNoMoreNumbers,
		activePlayer,
		getCurrentMarker,
		activateClick,
	};
})();
		