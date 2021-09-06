const canvas = document.getElementById('octet-game');
const ctx = canvas.getContext('2d');
import Game from "./game"

class Atom {
    constructor(options){
        this.width= 320;
        this.height= 320;
        this.frameX= 0;
        this.frameY= 0;
        this.pos= options.pos;
        // this.pos= [1,1];
        this.prevPos = this.pos;
        this.vel = options.vel;
        this.game= options.game;
        this.frames = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21,0]];
        this.counter= 0;
        this.frameCount= 0; //may not need this
        this.img= new Image();
        this.img.src = "src/assets/ezgif.com-gif-maker.png"
        this.img.onload = () => this.draw()
        this.radius = (this.width * 0.15) /2
    }

    draw(ctx){
        if (Math.abs(this.pos[0] - this.prevPos[0]) > 13 || Math.abs(this.pos[1] - this.prevPos[1]) > 13) {
            this.prevPos = this.pos;
        }
        // console.log("hi")

        if (Math.abs(this.pos[0] - this.prevPos[0]) > 0 && (this.pos[0] - this.prevPos[0])< 12) {
            console.log("test")
            this.prevPos = this.pos;
            this.counter += 1;
            this.frameX = this.frames[this.counter % 6][0];
            this.frameY = this.frames[this.counter % 2][1];
            this.counter = 0
        }

        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.pos[0], this.pos[1], this.width*0.2, this.height*0.2);
        if (this.frameX < 20 ) {
            // this.frameX++;
            this.frameX +=1;
        } else {
            this.frameX= 0;
        };
    }

    wallBounce() {
        if ((this.pos[0] + this.radius*2) >= Game.DIM_X){
            this.vel[0]= -(this.vel[0])
            this.pos[0]= 350;
        };

        if ((this.pos[0] + this.radius*1.2) <= 0){
            this.vel[0]= -(this.vel[0])
            this.pos[0]= 0;
        };

        if ((this.pos[1] + this.radius*2) >= Game.DIM_Y) {
            this.vel[1] = -(this.vel[1])
        };

        if ((this.pos[1] + this.radius*1.2) <= 0) {
            this.vel[1] = -(this.vel[1])
        };

        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    collisionDetect() {
        for (let j = 0; j < this.game.atoms.length; j++) {
            if (!(this === this.game.atoms[j])) {
                const dx = this.pos[0] - this.game.atoms[j].pos[0];
                const dy = this.pos[1] - this.game.atoms[j].pos[1];
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.radius + this.game.atoms[j].radius) {
                    this.vel[0] = -(this.vel[0]);
                    this.game.atoms[j].vel[1] = -(this.vel[1]);
                    this.pos[0] += this.vel[0];
                    this.game.atoms[j].pos[0] += this.game.atoms[j].vel[0];
                }
            }
        }
    }
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


export default Atom;