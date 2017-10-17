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

const getNumberOfNeighborBombs  = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
 neighborOffsets.forEach(offset => {
  const neighborRowIndex = rowIndex + offset[0];
  const neighborColumnIndex = columnIndex + offset[1];
  if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
    if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B' ){
        numberOfBombs ++
     }
    }
  });
 return numberOfBombs
}; 



const flipTile = (playerboard, bombBoard, rowIndex, columnIndex) => {
  if(playerboard[rowIndex][columnIndex] !== ' '){
   console.log('This tile has already been flipped!');
   return;
  } 
  else if(bombBoard[rowIndex][columnIndex] === 'B'){
        playerboard[rowIndex][columnIndex] = 'B';
  } else { 
    playerboard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) }
}



//
// ─── END FLIPTILE ───────────────────────────────────────────────────────────────
//

  

//formating the board
const printBoard = board => {
  console.log(board.map(row => row.join(" | ")).join("\n"));
};

//creating the board, building the board
let playerboard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

//logging and calling the player board
console.log("Player Board: ");
printBoard(playerboard);
//logging and calling the bomb board
console.log("Bomb Board: ");
printBoard(bombBoard);
//picking the tiles
flipTile(playerboard, bombBoard, 0, 0)
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard)
//picking the tiles
flipTile(playerboard, bombBoard, 1, 0)
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard)
//picking the tiles
flipTile(playerboard, bombBoard, 2, 0)
//logging and updating the player board
console.log('Update Player Board:');
printBoard(playerboard)
