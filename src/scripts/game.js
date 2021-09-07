
import Atom from "./atom";
import {Lithium, Beryllium, Boron} from "./elements"
import Player from "./player";
const Util = require("./util");

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];
        this.test= 0;
        this.addAtom();
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        this.atoms.push(new Lithium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/playertest.png"}) )
        this.atoms.push(new Beryllium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/playertest.png" }))
        this.atoms.push(new Boron({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/playertest.png" }))
        // for (let i = 0; i < Game.NUM_ATOMS; i++) {
        //     this.atoms.push(new Atom({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this }));
        // }
    };

    addPlayer() {
        const player = new Player({
            pos: [180, 180],
            game: this,
            src: "src/assets/playertest.png"
        });
        this.players.push(player);
        return player
    };
    
    allObjects() {
        return [].concat(this.players, this.atoms);
    };

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
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
        this.atoms.splice(this.atoms.indexOf(object), 1);
    }

}

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 0;
Game.NUM_PLAYERS= 7;



export default Game;
