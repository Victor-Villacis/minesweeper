"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
    var row = [];
    for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
};
//
// ─── END OF GENERATEPLAYERBOARD ─────────────────────────────────────────────────
//

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
    var row = [];
    for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(null);
    } //end inner for loop
    board.push(row);
  } //end outer for loop

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== "B") {
      board[randomRowIndex][randomColumnIndex] = "B";
      numberOfBombsPlaced++;
    }
  }
  return board;
};
//
// ─── END GENERATEBOMBBOARD ──────────────────────────────────────────────────────

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  //determine size of board
  //use flipped tile location
  //use array index
  //if bomb is adjacent record an incrementing counter
  //number of bombs adjacent to the flipped tile will be returned
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  //the length of the bombBoard which is the amount of rows in the while array, or the lenghtn of arrays nested in one big array. [ [1,2,3], [1,2,3], [1,2,3] ].length
  var numberOfRows = bombBoard.length;
  //the length of the columns since 0 is the index of the first row and thus will return the amount of columns for that row. [ [1,2,3].length [1,2,3], [1,2,3] ]
  var numberOfColumns = bombBoard[0].length;
  //store number of bombs adjacent to the flipped tile
  var numberOfBombs = 0;
  //forEach requires a callback method, since you are passing a function 'on' for each array 
  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        //if both these conditions are met
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

//
//  FLIPTILE WILL ALLOW THE PLAYER TO FLIP A TILE AND UPDATE THAT TILE ACCORDINGLY ─────
//

var flipTile = function flipTile(playerboard, bombBoard, rowIndex, columnIndex) {
  if (playerboard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerboard[rowIndex][columnIndex] = 'B';
  } else {
    playerboard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

//
// ─── CALL AND PRINT THE BOARDS TO THE CONSOLE ───────────────────────────────────
//

//formating the board
var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(" | ");
  }).join("\n"));
};

//creating the board, building the board
var playerboard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

//logging and calling the player board
console.log("Player Board: ");
printBoard(playerboard);
//logging and calling the bomb board
console.log("Bomb Board: ");
printBoard(bombBoard);
//picking the tiles
flipTile(playerboard, bombBoard, 0, 0);
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard);
//picking the tiles
flipTile(playerboard, bombBoard, 1, 0);
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard);
//picking the tiles
flipTile(playerboard, bombBoard, 2, 0);
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard);