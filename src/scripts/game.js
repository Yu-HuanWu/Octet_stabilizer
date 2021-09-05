
import Atom from "./atom";
// const Player = require("./player");
const Util = require("./util");

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        while (this.atoms.length < Game.NUM_ATOMS) {
            let newAtom = new Atom({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-5, 5), Util.random(-5, 5)] , game: this });
            this.atoms.push(newAtom);
        }
    }
    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.addAtom();
        
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        for (let i = 0; i < this.atoms.length; i++) {
            this.atoms[i].draw(ctx);
            this.atoms[i].update();
            this.atoms[i].collisionDetect();
        }

        // this.allObjects().forEach(function (object) {
        //     object.draw(ctx);
        // });
    }
}



Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 4;
Game.NUM_PLAYERS= 7;



export default Game;
