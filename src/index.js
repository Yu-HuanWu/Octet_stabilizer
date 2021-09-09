const Game = require("./scripts/game.js").default;
const GameView = require("./scripts/game_view.js").default;
const restart = document.querySelector('p.restart');
const gameOverBG = document.querySelector('.gameover-bg');
const gameOver = document.querySelector('.gameover');
const compound = document.getElementById("compound");
const boxes = Array.from(compound.children);
// const gameStatus = document.querySelector('h3.good-bad');
// const gameOverMsg = document.querySelector('p.gameover-msg');

document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById('octet-game');
    canvas.width= Game.DIM_X;
    canvas.height= Game.DIM_Y;

    let ctx = canvas.getContext("2d");
    let game= new Game();
    let gameView= new GameView(game, ctx)
    gameView.start();

    restart.addEventListener('click',()=>{
        gameOverBG.classList.remove('fade-in');
        gameOverBG.classList.add('hidden');
        gameOver.classList.remove('fade-in');
        gameOver.classList.add('hidden');
        boxes.forEach(ele => {
            if (ele.className !== "blank") {
                ele.style.display = "none";
            } else {
                ele.style.display = "inline";
            }
        });
        canvas= null;
        canvas = document.getElementById('octet-game');
        canvas.width = Game.DIM_X;
        canvas.height = Game.DIM_Y;
        ctx= null;
        game= null;
        ctx = canvas.getContext("2d");
        game= new Game();
        gameView = null;
        gameView= new GameView(game, ctx)
        gameView.start();
    })
})

//webpack
//webpack --watch --mode=development 