"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
    var row = [];
    for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(" ");
    }board.push(row);
  }
  console.log(board);
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

  numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }
  return board;
};
//
// ─── END GENERATEBOMBBOARD ──────────────────────────────────────────────────────
//


//
// ─── CALL AND PRINT THE BOARDS TO THE CONSOLE ───────────────────────────────────
//

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(" | ");
  }).join("\n"));
};

var playerboard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerboard);
console.log("Bomb Board: ");
printBoard(bombBoard);