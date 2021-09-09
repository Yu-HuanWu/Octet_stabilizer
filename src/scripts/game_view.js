const gameOverBG = document.querySelector('.gameover-bg');
const gameOver= document.querySelector('.gameover');
const gameStatus= document.querySelector('h3.good-bad');
const gameOverMsg= document.querySelector('p.gameover-msg');
const start = document.querySelector('.start');


class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.switch= 0;
        this.player = this.game.addPlayer();
    }
    bindKeyHandlers() {
        const player = this.player;

        Object.keys(GameView.MOVES).forEach(function (k) {
            const moves = GameView.MOVES[k];
            key(k, function () { player.power(moves); });
        });

        key("space", function () { player.switchAtom(); this.switch +=1});
    }

    start() {
        start.classList.remove('hidden');
        start.classList.add('fade-in');
        this.game.pause= true;
        this.bindKeyHandlers();
        this.game.timePassed();
        this.lastTime = 0;
        // start the animation
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;

        if (!this.game.pause) {
            this.player.move(timeDelta);
            this.player.collisionAtoms();
            this.player.wallBounce();
            this.game.draw(this.ctx);
        } 
        if (this.game.timer===0) {
            this.game.pause= true;
            let status;
            let gameMessage;
            if (this.game.score > 20){
                status= "Legendary";
                gameMessage= `With a score like ${this.game.score}, you definitely know your stuff!`;
                gameStatus.classList.remove('bad-only');
                gameStatus.classList.add('good-only');
            } else if (this.game.score> 10) {
                status= "Competent";
                gameMessage = `${this.game.score} is okay, but I think we can do better than that!`;
                gameStatus.classList.remove('bad-only');
                gameStatus.classList.add('good-only');
            } else if (this.game.score === 0) {
                status = "Bruh, 0?";
                gameMessage = "This score ain't it, Chief.";
                gameStatus.classList.remove('good-only');
                gameStatus.classList.add('bad-only');
            } else {
                status = "Novice";
                gameMessage = `Only ${this.game.score}? Those are rookie numbers in this racket.`;
                gameStatus.classList.remove('good-only');
                gameStatus.classList.add('bad-only');
            }
            gameStatus.textContent= status;
            gameOverMsg.textContent= gameMessage;
            gameOverBG.classList.remove('hidden');
            gameOverBG.classList.add('fade-in');
            gameOver.classList.remove('hidden');
            gameOver.classList.add('fade-in');
        }
        this.lastTime = time;


        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    }
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};




export default GameView;
