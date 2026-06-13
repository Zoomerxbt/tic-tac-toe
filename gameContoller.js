import { gameBoard } from "./gameBoard.js";

export function gameController() {
  let board = gameBoard();

  const players = [
    { player: "player1", token: "X" },
    { player: "player2", token: "O" },
  ];

  let activePlayer = players[0];

  const scores = { x: 0, o: 0, ties: 0 };

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const getGameState = (roundResult = "No winner yet") => {
    return {
      board: board.getBoard().flat(),
      currentTurn: activePlayer.token,
      scores: { ...scores },
      result: roundResult,
    };
  };

  const restartGame = () => {
    board = gameBoard();
    activePlayer = players[0];
    return getGameState();
  };

  const playRound = (row, column) => {
    const token = getActivePlayer().token;
    const move = board.placeToken(token, row, column);

    if (move === "Invalid move") {
      return "Invalid move";
    }

    const checkWinner = ((token) => {
      const boardgame = board.getBoard();

      if (
        boardgame[0][0] === token &&
        boardgame[1][0] === token &&
        boardgame[2][0] === token
      )
        return `${token} wins`;
      if (
        boardgame[0][1] === token &&
        boardgame[1][1] === token &&
        boardgame[2][1] === token
      )
        return `${token} wins`;
      if (
        boardgame[0][2] === token &&
        boardgame[1][2] === token &&
        boardgame[2][2] === token
      )
        return `${token} wins`;

      if (
        boardgame[0][0] === token &&
        boardgame[0][1] === token &&
        boardgame[0][2] === token
      )
        return `${token} wins`;
      if (
        boardgame[1][0] === token &&
        boardgame[1][1] === token &&
        boardgame[1][2] === token
      )
        return `${token} wins`;
      if (
        boardgame[2][0] === token &&
        boardgame[2][1] === token &&
        boardgame[2][2] === token
      )
        return `${token} wins`;

      if (
        boardgame[0][0] === token &&
        boardgame[1][1] === token &&
        boardgame[2][2] === token
      )
        return `${token} wins`;
      if (
        boardgame[0][2] === token &&
        boardgame[1][1] === token &&
        boardgame[2][0] === token
      )
        return `${token} wins`;

      if (!boardgame.flat().includes("")) return "Tie";

      return "No winner yet";
    })(token);

    if (checkWinner === "X wins") scores.x++;
    if (checkWinner === "O wins") scores.o++;
    if (checkWinner === "Tie") scores.ties++;

    switchPlayerTurn();

    return checkWinner;
  };

  const playTurnByIndex = (index) => {
    const row = Math.floor(index / 3);
    const column = index % 3;
    const result = playRound(row, column);

    if (result === "Invalid move") return "Invalid move";
    return getGameState(result);
  };

  return {
    playRound,
    playTurnByIndex,
    getActivePlayer,
    getGameState,
    restartGame,
  };
}
