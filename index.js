function gameBoard() {
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

function gameBoard() {
  let rows = 3;
  let columns = 3;

  // create two-dimensional array
  const board = Array.from({ length: rows }, () => new Array(columns).fill(""));

  const getBoard = () => board;

  // insert token into board
  const placeToken = (token, row, column) => {
    if (board[row][column] !== "") {
      return "Invalid move";
    }

    board[row][column] = token;
    return board;
  };

  const printBoard = () => {
    console.table(board);
  };

  return { getBoard, placeToken, printBoard };
}

// Game controller
function gameController() {
  const board = gameBoard();

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

  const getActivePlayer = () => activePlayer;

  const playRound = (row, column) => {
    // store current player's token FIRST
    const token = getActivePlayer().token;

    // place token
    const move = board.placeToken(token, row, column);

    // stop invalid moves
    if (move === "Invalid move") {
      return "Invalid move";
    }

    // Winning logic
    const checkWinner = ((token) => {
      const boardgame = board.getBoard();

      // columns
      if (
        boardgame[0][0] === token &&
        boardgame[1][0] === token &&
        boardgame[2][0] === token
      ) {
        return `${token} wins`;
      } else if (
        boardgame[0][1] === token &&
        boardgame[1][1] === token &&
        boardgame[2][1] === token
      ) {
        return `${token} wins`;
      } else if (
        boardgame[0][2] === token &&
        boardgame[1][2] === token &&
        boardgame[2][2] === token
      ) {
        return `${token} wins`;
      }

      // rows
      else if (
        boardgame[0][0] === token &&
        boardgame[0][1] === token &&
        boardgame[0][2] === token
      ) {
        return `${token} wins`;
      } else if (
        boardgame[1][0] === token &&
        boardgame[1][1] === token &&
        boardgame[1][2] === token
      ) {
        return `${token} wins`;
      } else if (
        boardgame[2][0] === token &&
        boardgame[2][1] === token &&
        boardgame[2][2] === token
      ) {
        return `${token} wins`;
      }

      // diagonals
      else if (
        boardgame[0][0] === token &&
        boardgame[1][1] === token &&
        boardgame[2][2] === token
      ) {
        return `${token} wins`;
      } else if (
        boardgame[0][2] === token &&
        boardgame[1][1] === token &&
        boardgame[2][0] === token
      ) {
        return `${token} wins`;
      }

      return "No winner yet";
    })(token);

    // switch AFTER checking winner
    switchPlayerTurn();

    return checkWinner;
  };

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
  };
}

// UI controller
function uiController() {}
