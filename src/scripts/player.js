const canvas = document.getElementById('octet-game');
const ctx = canvas.getContext('2d');
import {Lithium, Beryllium, Boron} from "./elements";


class Player {
    constructor(options){
        this.width=320;
        this.height= 320;
        this.vel= options.vel || [0,0];
        this.game= options.game;
        this.frameX= 0;
        this.frameY= 0;
        this.pos = options.pos;
        this.img = new Image();
        this.elements = ["Oxygen", "Fluorine", "Nitrogen"];
        this.num = 0
        this.element= this.elements[this.num];
        // this.img.src= options.src;
        this.img.src = "src/assets/playertest.png";
        // this.img.onload= () => this.draw();
        this.radius = (this.width * 0.15) / 2;
        this.counter = 3
    }

    draw(ctx){
        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.pos[0], this.pos[1], this.width * 0.2, this.height * 0.2);

        //this is to slowdown the frame rate
        if (this.counter > 0) {
            this.counter -= 1;
        } else {
            // This is where Player's atom will change upon hitting space bar
            if (this.element === "Oxygen") {
                this.img.src = "src/assets/playertest.png";
                if (this.frameX < 20) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Fluorine") {
                this.img.src = "src/assets/ezgif.com-gif-maker.png";
                if (this.frameX < 20) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Nitrogen") {
                this.img.src = "src/assets/playertest.png";
                if (this.frameX < 20) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            }
            this.counter = 3;
        }
    }


    power(impulse){
        //impulse will be based on user's move keys
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
    };

    switchAtom(){
    //     if (this.game.test=== 0) {
    //     this.game.test= 1;
    //     this.element= this.elements[1];
    // } else {
    //     this.game.test= 0;
    //     this.element= this.elements[0];
    // }
        if (this.num < 2){
            this.num+= 1;
            this.element = this.elements[this.num];
        } else {
            this.num= 0
            this.element = this.elements[this.num];
        }
    };

    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    }

    moveObject(timeDelta) {
        this.move(timeDelta);
    }

    wallBounce() {
        if ((this.pos[0] + this.radius * 2) >= 400) {
            this.vel[0] = -1
        };

        if ((this.pos[0] + this.radius * 1.2) <= 0) {
            this.vel[0] = 1
        };

        if ((this.pos[1] + this.radius * 2) >= 400) {
            this.vel[1] = -1
        };

        if ((this.pos[1] + this.radius * 1.2) <= 0) {
            this.vel[1] = 1
        };

        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    collisionAtoms() {
        for (let j = 0; j < this.game.atoms.length; j++) {
            const dx = this.pos[0] - this.game.atoms[j].pos[0];
            const dy = this.pos[1] - this.game.atoms[j].pos[1];
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radius + this.game.atoms[j].radius) {
                if (this.game.atoms[j] instanceof Lithium && this.element === "Fluorine") {
                    this.game.remove(this.game.atoms[j]);
                    break;
                } else if (this.game.atoms[j] instanceof Beryllium && this.element === "Oxygen"){
                    this.game.remove(this.game.atoms[j]);
                    break;
                } else if (this.game.atoms[j] instanceof Boron && this.element === "Nitrogen") {
                    this.game.remove(this.game.atoms[j]);
                    break;
                }
                this.vel[0] = -(this.vel[0]);
                this.game.atoms[j].vel[1] = -(this.vel[1]);
                this.pos[0] += this.vel[0];
                this.game.atoms[j].pos[0] += this.game.atoms[j].vel[0];
            }
        }
    }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

export default Player;