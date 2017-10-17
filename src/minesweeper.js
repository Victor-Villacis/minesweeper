const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
    let row = [];
    for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(" ");
    } 
    board.push(row);
  }
  return board;
};
//
// ─── END OF GENERATEPLAYERBOARD ─────────────────────────────────────────────────
//

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++) {
    let row = [];
    for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(null);
    }//end inner for loop
    board.push(row);
  }//end outer for loop

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if(board[randomRowIndex][randomColumnIndex] !== "B"){
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
     }
    }
  return board;
};
//
// ─── END GENERATEBOMBBOARD ──────────────────────────────────────────────────────
//


//
// ─── CALL AND PRINT THE BOARDS TO THE CONSOLE ───────────────────────────────────
//

const printBoard = board => {
  console.log(board.map(row => row.join(" | ")).join("\n"));
};

let playerboard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerboard);
console.log("Bomb Board: ");
printBoard(bombBoard);