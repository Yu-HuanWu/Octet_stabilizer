
import Atom from "./atom";
import Player from "./player";
// const Player = require("./player");
const Util = require("./util");

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];

        this.addAtom();
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        // while (this.atoms.length < Game.NUM_ATOMS) {
        //     let newAtom = new Atom({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-5, 5), Util.random(-5, 5)] , game: this });
        //     this.atoms.push(newAtom);
        // }
        for (let i = 0; i < Game.NUM_ATOMS; i++) {
            this.atoms.push(new Atom({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-5, 5), Util.random(-5, 5)], game: this }));
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

    // collisionDetect() {
    //     for(let i= 0; i < this.atoms.length; i++){
    //         for (let j = 0; j < this.atoms.length; j++) {
    //             if (!(this.atoms[i] === this.atoms[j])) {
    //                 const dx = this.atoms[i].pos[0] - this.atoms[j].pos[0];
    //                 const dy = this.atoms[i].pos[1] - this.atoms[j].pos[1];
    //                 const distance = Math.sqrt(dx * dx + dy * dy);

    //                 if (distance < this.radius + this.atoms[j].radius) {
    //                     this.atoms[i].vel[0] = -(this.atoms[i].vel[0]);
    //                     this.atoms[j].vel[1] = -(this.atoms[j].vel[1]);
    //                     this.atoms[i].pos[0] += this.atoms[i].vel[0];
    //                     this.atoms[j].pos[0] += this.atoms[j].vel[0];
    //                 }
    //             }
    //         }
    //     }
    // }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        // for (let i = 0; i < this.atoms.length; i++) {
        //     this.atoms[i].draw(ctx);
        //     this.atoms[i].update();
        //     // this.atoms[i].collisionDetect();
        // }
        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
        this.atoms.forEach(el=>{
            el.update();
            el.collisionDetect();
        })

       // this.players[0].draw(ctx);
    }

    step(delta) {
        this.players[0].move(delta);
        // this.collisionDetect();
    };
}

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 4;
Game.NUM_PLAYERS= 7;



export default Game;
