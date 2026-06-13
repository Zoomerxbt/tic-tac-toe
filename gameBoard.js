export function gameBoard() {
  let rows = 3;
  let columns = 3;

  // create two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(""));
  const getBoard = () => board;

  //  We will need a method that will insert a token in an empty cell
  const placeToken = (token, row, column) => {
    // Validate if a index is open
    if (board[row][column] !== "") {
      return "Invalid move";
    }

    board[row][column] = token;
    return board;
  };

  const printBoard = () => {
    return board;
  };

  return { getBoard, placeToken, printBoard };
}
