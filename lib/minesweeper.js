'use strict';

/***************************************
// //formating board
// const printBoard = board => {
//     console.log('Current Board:');
//     console.log(board[0].join(' | '));
//     console.log(board[1].join(' | '));
//     console.log(board[2].join(' | '));
// }

// //game board
// const board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ];
// printBoard(board);
// board[0][1] = 1;
// board[2][2] = "B";
// printBoard(board);
*******************************************/

//Creates the board dynamically for the player, this used nested functions. It iterates over the outside once, then 
//jumps inside and does that x number of times,  it then goes back out and does that once again and them
//goes back in. So if it is 3 and 4 then for ever 1 of 3 it will do 4.  

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	//array representing the overall gameboard
	var board = [];
	for (var numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
		//represents a single row added to the game
		var row = [];
		for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
			row.push(' ');
		}
		board.push(row);
	}return board;
};
console.log(generatePlayerBoard(3, 4));