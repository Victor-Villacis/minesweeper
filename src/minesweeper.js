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

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	//array representing the overall gameboard
	let board = [];
	for (let numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++ ){
	//represents a single row added to the game
	let row = []
	for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(' ')
		} 
		board.push(row)
	} return board;
	//back to function

} 
console.log(generatePlayerBoard())

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	//array representing the overall gameboard
	let board = [];
	for (let numberOfRowIndex = 0; numberOfRowIndex < numberOfRows; numberOfRowIndex++ ){
	//represents a single row added to the game
	let row = []
	for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(null)
		} 
		board.push(row)
	} return board;
		//back to function

//bomb counter, it will add until it reaced the specified numberOfBombs
	numberOfBombsPlaced = 0;
	while(numberOfBombsPlaced <= numberOfBombs){
	let randomRowIndex = Math.floor(Math.random() * numberOfRows);
	let randomColumnIndex = Math.floor(Math.random() * numberOfRows);
	bomb[[randomRowIndex], [randomColumnIndex]] = 'B'
	numberOfBombsPlaced++
	//An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
	}

}

//print board
const  printBoard = (board) => {
	board.map(row => row.join(' | ') )
}