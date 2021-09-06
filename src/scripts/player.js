const canvas = document.getElementById('octet-game');
const ctx = canvas.getContext('2d');
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
        this.img.src = "src/assets/playertest.png";
        this.img.onload= () => this.draw();
    }

    draw(ctx){
        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.pos[0], this.pos[1], this.width * 0.2, this.height * 0.2);
        if (this.frameX < 20) {
            this.frameX++;
            // this.frameX += 1;
        } else {
            this.frameX = 0;
        };

    }


    power(impulse){
        //impulse will be based on user's move keys
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
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
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

export default Player;