const Game = require("./scripts/game.js").default;
const GameView = require("./scripts/game_view.js").default;
const restart = document.querySelector('p.restart');
const beginButton = document.querySelector('p.begin')
const gameOverBG = document.querySelector('.gameover-bg');
const gameOver = document.querySelector('.gameover');
const start = document.querySelector('.start');
const compound = document.getElementById("compound");
const boxes = Array.from(compound.children);

document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById('octet-game');
    canvas.width= Game.DIM_X;
    canvas.height= Game.DIM_Y;

    beginButton.addEventListener('click', ()=>{
        start.classList.remove('fade-in');
        start.classList.add('hidden');
        game.pause=false;
        game.timePassed();
    })
    let ctx = canvas.getContext("2d");
    let game= new Game();
    let gameView= new GameView(game, ctx)
    start.classList.remove('hidden');
    start.classList.add('fade-in');
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