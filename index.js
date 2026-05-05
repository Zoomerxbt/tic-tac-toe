function gameboard() {
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

// The game controller will be responsible for the flow of the game

function gameController() {
  const board = gameboard();

  const players = [
    {
      player: "player1",
      token: "X",
    },
    {
      player: "player2",
      token: "O",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => {
    return activePlayer;
  };

  const playRound = (row, column) => {

    board.placeToken(getActivePlayer().token, row, column);

    switchPlayerTurn();

    const checkWinner = (() => {
      // horizontal winning sequence =  3 of the same token horizontally  for 3 row
      // Vertical winning sequence  = 3 of the same token vertically for 3 columns
      //  diagoonal wiinning sequence = 3 of the same token diagonally

      if()


    })();
  };

  return { playRound, getActivePlayer, getBoard: board.getBoard };
}
