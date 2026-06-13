export function uiController() {
  const dom = {
    menuScreen: document.getElementById("menu-screen"),
    pickXBtn: document.getElementById("pick-x"),
    pickOBtn: document.getElementById("pick-o"),
    startCpuBtn: document.getElementById("start-cpu"),
    startPlayerBtn: document.getElementById("start-player"),

    gameScreen: document.getElementById("game-screen"),
    restartBtn: document.getElementById("restart-btn"),
    turnIndicator: document.getElementById("turn-indicator"),
    board: document.getElementById("game-board"),
    cells: document.querySelectorAll(".grid-cell"),
    scores: {
      x: document.getElementById("score-x"),
      ties: document.getElementById("score-tie"),
      o: document.getElementById("score-o"),
    },
  };

  const bindEvents = (actions) => {
    dom.pickXBtn.addEventListener("click", () => actions.onMarkSelect("X"));
    dom.pickOBtn.addEventListener("click", () => actions.onMarkSelect("O"));

    dom.startCpuBtn.addEventListener("click", () => actions.onStartGame("cpu"));
    dom.startPlayerBtn.addEventListener("click", () =>
      actions.onStartGame("player"),
    );

    dom.board.addEventListener("click", (e) => {
      const cell = e.target.closest(".grid-cell");
      if (!cell) return;
      actions.onCellClick(parseInt(cell.dataset.index, 10));
    });

    dom.restartBtn.addEventListener("click", actions.onRestart);
  };

  const updateMenuTabs = (selectedMark) => {
    if (selectedMark === "X") {
      dom.pickXBtn.classList.add("bg-slate-300");
      dom.pickOBtn.classList.remove("bg-slate-300");
    } else {
      dom.pickOBtn.classList.add("bg-slate-300");
      dom.pickXBtn.classList.remove("bg-slate-300");
    }
  };

  const switchScreen = (screenName) => {
    if (screenName === "game") {
      dom.menuScreen.classList.add("hidden");
      dom.gameScreen.classList.remove("hidden");
      dom.gameScreen.classList.add("grid");
    } else {
      dom.gameScreen.classList.add("hidden");
      dom.gameScreen.classList.remove("grid");
      dom.menuScreen.classList.remove("hidden");
    }
  };

  const render = (gameState) => {
    dom.cells.forEach((cell, index) => {
      const token = gameState.board[index];
      cell.textContent = token;
      cell.disabled = token !== "";

      cell.classList.remove("text-teal-400", "text-amber-400");
      if (token === "X") cell.classList.add("text-teal-400");
      if (token === "O") cell.classList.add("text-amber-400");
    });

    dom.turnIndicator.textContent = `${gameState.currentTurn} TURN`;
    dom.scores.x.textContent = gameState.scores.x;
    dom.scores.o.textContent = gameState.scores.o;
    dom.scores.ties.textContent = gameState.scores.ties;

    if (gameState.result.includes("wins")) {
      alert(`${gameState.result}!`);
      dom.cells.forEach((cell) => (cell.disabled = true));
    } else if (gameState.result === "Tie") {
      alert("It's a tie round!");
    }
  };

  return {
    init: bindEvents,
    update: render,
    updateMenuTabs,
    switchScreen,
    dom,
  };
}
