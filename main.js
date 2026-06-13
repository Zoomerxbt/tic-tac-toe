import { gameController } from "./gameContoller.js";
import { uiController } from "./uiController.js";

const ui = uiController();
let game;

let configurations = {
  p1Mark: "X",
  gameMode: "player",
};

ui.init({
  onMarkSelect: (mark) => {
    configurations.p1Mark = mark;
    ui.updateMenuTabs(mark);
  },

  onStartGame: (mode) => {
    configurations.gameMode = mode;

    game = gameController();

    ui.update(game.getGameState());

    ui.switchScreen("game");

    console.log(
      `Starting game vs ${mode}. Player 1 mark is ${configurations.p1Mark}`,
    );
  },

  onCellClick: (index) => {
    const newState = game.playTurnByIndex(index);
    if (newState !== "Invalid move") {
      ui.update(newState);

      if (
        configurations.gameMode === "cpu" &&
        newState.result === "No winner yet"
      ) {
        setTimeout(executeCpuTurn, 500);
      }
    }
  },

  onRestart: () => {
    const freshState = game.restartGame();
    ui.update(freshState);
  },
});

function executeCpuTurn() {
  const currentState = game.getGameState();

  const emptyIndexes = currentState.board
    .map((token, index) => (token === "" ? index : null))
    .filter((val) => val !== null);

  if (emptyIndexes.length > 0) {
    const randomChoice =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    const cpuState = game.playTurnByIndex(randomChoice);
    ui.update(cpuState);
  }
}
