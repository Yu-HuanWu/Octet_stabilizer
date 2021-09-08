
import Atom from "./atom";
import { Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine} from "./elements"
import Player from "./player";
const Util = require("./util");
const compound = document.getElementById("compound");
const boxes = Array.from(compound.children);
boxes.forEach(ele => {
    if (ele.className !== "blank"){
        ele.style.display= "none";
    }
});

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];
        this.test= 0;
        this.addAtom();
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        this.atoms.push(new Lithium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomLi.png"}) )
        this.atoms.push(new Beryllium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomBe.png" }))
        this.atoms.push(new Boron({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomB.png" }))
        this.atoms.push(new Carbon({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomC.png" }))
        this.atoms.push(new Nitrogen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomN.png" }))
        this.atoms.push(new Oxygen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomO.png" }))
        this.atoms.push(new Fluorine({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [0, 0], game: this, src: "src/assets/AtomF.png" }))
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

    updateCompound(obj){
        // const boxes = Array.from(compound.children);
        // compound.style.display= "inline";

        boxes.forEach( ele =>{
            ele.style.display = "none";
            if (obj instanceof Fluorine || obj instanceof Lithium){
                if (ele.className === "LiFActive"){
                    ele.style.display= "inline";
                }
            } else if (obj instanceof Oxygen || obj instanceof Beryllium) {
                if (ele.className === "BeOActive") {
                    ele.style.display = "inline";
                }
            } else if (obj instanceof Nitrogen || obj instanceof Boron) {
                if (ele.className === "BNActive") {
                    ele.style.display = "inline";
                }
            } else if (obj === "FF") {
                if (ele.className === "FFActive") {
                    ele.style.display = "inline";
                }
            } else if (obj === "OO") {
                if (ele.className === "OOActive") {
                    ele.style.display = "inline";
                }
            } else if (obj === "NN") {
                if (ele.className === "NNActive") {
                    ele.style.display = "inline";
                }
            }
        });
    }

}

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 0;
Game.NUM_PLAYERS= 7;



export default Game;
