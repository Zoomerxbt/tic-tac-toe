function gameboard() {
  let rows = 3;
  let columns = 3;

  // create two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(""));
  const getBoard = () => board;

  //  We will need a method to place mark on any available cell that has 0 placeholder
  const placeMark = (player, row, column) => {
    // Validate if a index is open
    if (board[row][column] !== "") {
      return "Invalid move";
    }
    board[row][column] = player;
    return board;
  };

  const printBoard = () => {
    return board;
  };

  return { getBoard, placeMark, printBoard };
}

let newGame = gameboard();

console.table(newGame.placeMark("X", 1, 2));
console.table(newGame.placeMark("0", 2, 2));
console.table(newGame.placeMark("0", 1, 1));
console.table(newGame.placeMark("0", 2, 1));
