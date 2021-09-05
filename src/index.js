const Game = require("./scripts/game.js").default;
const GameView = require("./scripts/game_view.js").default;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('octet-game');
    canvas.width= Game.DIM_X;
    canvas.height= Game.DIM_Y;

    const ctx = canvas.getContext("2d");
    const game= new Game();
    game.draw(ctx);

    new GameView(game, ctx).start();
})

//webpack
//webpack --watch --mode=development 