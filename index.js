function gameboard() {
  let rows = 3;
  let columns = 3;

  // create two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(""));
  const getBoard = () => board;

  //  We will need a method that will insert a token in an empty cell
  const placeMark = (token, row, column) => {
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

  return { getBoard, placeMark, printBoard };
}

// The game controller will be responsible for the flow of the game

function gameController(player1 = "Player 1", player2 = "Player 2") {
  const board = gameboard();

  const players = [
    {
      player1: player1,
      token: 1,
    },
    {
      player2: player2,
      token: 2,
    },
  ];

  let activePlayer = player[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  switchPlayerTurn();

  return {};
}

let game = gameboard();

console.table(game.placeMark("X", 0, 0));
console.table(game.placeMark("O", 0, 0));
