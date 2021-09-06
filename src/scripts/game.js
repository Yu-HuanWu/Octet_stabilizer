
import Atom from "./atom";
// import Lithium from "./elements"
import Player from "./player";
const Util = require("./util");

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];

        this.addAtom();
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        for (let i = 0; i < Game.NUM_ATOMS; i++) {
            // this.atoms.push(new Lithium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this }) )
            this.atoms.push(new Atom({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this }));
        }
    };

    addPlayer() {
        const player = new Player({
            pos: [180, 180],
            game: this
        });
        this.players.push(player);
        return player;
    };
    
    allObjects() {
        return [].concat(this.players, this.atoms);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });

        this.atoms.forEach(el=> {
            el.wallBounce();
            el.collisionDetect();
        })
    }

    remove(object) {
        if (object instanceof Atom) {
            this.atoms.splice(this.atoms.indexOf(object), 1);
        } else if (object instanceof Player) {
            this.ships.splice(this.ships.indexOf(object), 1);
        } else {
            throw new Error("unknown type of object");
        }
    }

}

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 9;
Game.NUM_PLAYERS= 7;



export default Game;
