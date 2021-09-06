class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
    }
    bindKeyHandlers() {
        const player = this.player;

        Object.keys(GameView.MOVES).forEach(function (k) {
            const moves = GameView.MOVES[k];
            key(k, function () { player.power(moves); });
        });

        key("space", function () { player.switchAtom(); });
        //will need to create player.prototype.switchAtom
    }

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;
        // start the animation
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    }
}

GameView.MOVES = {
    w: [0, 1],
    a: [-1, 0],
    s: [0, -1],
    d: [1, 0],
};




export default GameView;
