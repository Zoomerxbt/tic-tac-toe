function Gameboard() {
  let rows = 3;
  let columns = 3;

  // create two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(0));
  const getBoard = () => board;

  //  We will need a method to place mark on any available cell that has 0 placeholder
  const placeMark = (player, row, column) => {
    // Validate if a index is open
    if (board[row][column] !== "") {
      return false;
    }
    board[row][column] = player;
    return true;
  };
  return { getBoard, placeMark };
}
