function Gameboard() {
  let rows = 3;
  let columns = 3;

  // creating two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(0));
  const getBoard = () => board;

  //  We will need a method to place mark on any available cell that has 0 placeholder

  return { getBoard };
}

let rows = 3;
let columns = 3;

// creating two-dimensional array
const board = Array.from({ length: rows }, () => new Array(columns).fill(0));

console.table(board);
