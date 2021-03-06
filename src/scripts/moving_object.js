class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.game = options.game;
    }

    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    }
}