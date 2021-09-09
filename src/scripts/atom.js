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
        this.prevPos = this.pos;
        this.vel = options.vel;
        this.game= options.game;
        this.counter= 3;
        this.img= new Image();
        this.img.src= options.src;
        // this.img.src = "src/assets/ezgif.com-gif-maker.png"
        this.img.onload = () => this.draw()
        this.radius = (this.width * 0.15) /2
    }

    draw(ctx){
        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.pos[0], this.pos[1], this.width*0.2, this.height*0.2);
        if (this.counter > 0){
            this.counter -=1;
        } else {
            if (this.frameX < 70 ) {
                this.frameX++;
            } else {
                this.frameX= 0;
            };
            this.counter = 3
        }
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