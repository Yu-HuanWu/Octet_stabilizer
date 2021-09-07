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
        this.bindKeyHandlers();
        this.lastTime = 0;
        // start the animation
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;

        this.player.move(timeDelta);
        this.player.collisionAtoms();
        this.player.wallBounce();
        this.game.draw(this.ctx);
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
