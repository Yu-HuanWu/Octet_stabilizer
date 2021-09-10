
// import Atom from "./atom";
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
const minusTime = document.querySelector(".minusTime");
const plusTime = document.querySelector(".plusTime");

class Game {
    constructor() {
        this.atoms = [];
        this.players = [];
        this.test= 0;
        this.addAtom();
        this.timer = 60;
        this.score= 0;
        this.pause= false;
        //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
    }
    addAtom() {
        this.atoms.push(new Lithium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomLi.png"}) )
        this.atoms.push(new Beryllium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomBe.png" }))
        this.atoms.push(new Boron({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomB.png" }))
        this.atoms.push(new Carbon({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomC.png" }))
        this.atoms.push(new Nitrogen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomN.png" }))
        this.atoms.push(new Oxygen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomO.png" }))
        this.atoms.push(new Fluorine({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomF.png" }))
    };

    addMoreAtom(){
        let randomNum = Util.random(0, 6)
        if (this.atoms.length< 5) {
            if (randomNum === 0) {
                this.atoms.push(new Lithium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomLi.png" }));
            } else if (randomNum === 1) {
                this.atoms.push(new Beryllium({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomBe.png" }));
            } else if (randomNum === 2) {
                this.atoms.push(new Boron({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomB.png" }));
            } else if (randomNum === 3) {
                this.atoms.push(new Nitrogen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomN.png" }));
            } else if (randomNum === 4) {
                this.atoms.push(new Oxygen({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomO.png" }));
            } else {
                this.atoms.push(new Fluorine({ pos: [Util.random(20, 300), Util.random(20, 300)], vel: [Util.random(-3, 3), Util.random(-3, 3)], game: this, src: "src/assets/AtomF.png" }));
            }
        }
    }

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

    timePassed() {
        if (!this.pause){
            setInterval(() => { this.timer -= 1 }, 1000);
        }
    }

    scoreOne() {
        this.score ++;
    }
    
    showScore(){
        if (this.score === 1) {
            return `${this.score} atom stabilized`
        } else {
            return `${this.score} atoms stabilized`
        }
    }

    showProperTime() {
        let minutes = Math.floor(this.timer / 60).toString();
        let seconds = (this.timer % 60).toString();
        if (minutes.length === 1) {
            minutes = "0" + minutes;
        }
        if (seconds.length === 1) {
            seconds = "0" + seconds;
        }
        return `${minutes}:${seconds}`;
    }

    draw(ctx) {

        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        
        ctx.globalAlpha = 1;

        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });

        this.atoms.forEach(el=> {
            el.wallBounce();
            el.collisionDetect();
        })

        if (this.timer > 10) ctx.fillStyle = "white";
        else ctx.fillStyle = "red";
        ctx.textAlign = "left";
        ctx.globalAlpha = 0.6;
        ctx.font = '15px "Press start 2P"'
        ctx.fillText(`\u{1F553} ${this.showProperTime()}`, 280, 30);
        
        if (this.score < 3) {
            ctx.fillStyle = "white";
        } else if (this.score < 7) {
            ctx.fillStyle = "#FDEDAC";
        } else if (this.score< 11) {
            ctx.fillStyle = "#F7DC6F";
        } else {
            ctx.fillStyle = "#F7CE26";
        }
        ctx.font = '10px "Press start 2P"'
        ctx.fillText(`${this.showScore()}`, 20, 30)

        this.addMoreAtom();
    }

    remove(object) {
        this.atoms.splice(this.atoms.indexOf(object), 1);
    }

    addTimeMsg(){
        plusTime.classList.remove('hidden');
        plusTime.classList.add('fade-in');
        setTimeout(function(){
            plusTime.classList.remove('fade-in');
            plusTime.classList.add('hidden');
        }, 4000)
    }

    substractTimeMsg(){
        minusTime.classList.remove('hidden');
        minusTime.classList.add('fade-in');
        setTimeout(function () {
            minusTime.classList.remove('fade-in');
            minusTime.classList.add('hidden');
        }, 4000)
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
            } else if (obj === "CO") {
                if (ele.className === "COActive") {
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
