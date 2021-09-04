const canvas = document.getElementById('octet-game');
const ctx = canvas.getContext('2d');

class Atom {
    constructor(options){
        this.width= 320;
        this.height= 320;
        this.frameX= 0;
        this.frameY= 0;
        // this.pos= options.pos;
        this.pos= [0,0];
        this.prevPos = this.pos;
        // this.vel = 
        this.game= options.game;
        this.frames = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21,0]];
        // this.counter= 0;
        this.frameCount= 0; //may not need this
        this.img= new Image();
        this.img.src = "src/assets/ezgif.com-gif-maker.png"
        this.img.onload = () => this.draw()
    }

    draw(ctx){

        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.pos[0], this.pos[1], this.width, this.height);
    }
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


module.exports = Atom;