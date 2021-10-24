const canvas = document.getElementById('octet-game');
const ctx = canvas.getContext('2d');
import { Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine} from "./elements";


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
        this.elements = ["Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine"];
        this.num = 0
        this.element= this.elements[this.num];
        this.radius = (this.width * 0.15) / 2;
        this.counter = 3;
        this.shipcounter = 4;
        this.shipframeX = 0;
        this.shipframeY = 0;
    }

    draw(ctx){
        let ship = new Image();
        ship.src = "src/assets/Ship.png";
        //img, sX, sY, sW, sH, dX, dY, dW, dH
        
        drawSprite(ship, 400 * this.shipframeX, 400 * this.shipframeY, 400, 400, this.pos[0] - 15, this.pos[1] - 15, this.width * 0.3, this.height * 0.3);
        
        if (this.shipcounter > 0) {
            this.shipcounter -= 1;
        } else {
            if (this.shipframeX < 13) {
                this.shipframeX++;
            } else {
                this.shipframeX = 0;
            };
            this.shipcounter = 4;
        }

        
        drawSprite(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.pos[0], this.pos[1], this.width * 0.2, this.height * 0.2);
        
        //this is to slowdown the frame rate
        if (this.counter > 0) {
            this.counter -= 1;
        } else {
            // This is where Player's atom will change upon hitting space bar
            if (this.element === "Oxygen") {
                this.img.src = "src/assets/AtomOPlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Fluorine") {
                this.img.src = "src/assets/AtomFPlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Nitrogen") {
                this.img.src = "src/assets/AtomNPlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Carbon") {
                this.img.src = "src/assets/AtomCPlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Boron") {
                this.img.src = "src/assets/AtomBPlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Beryllium") {
                this.img.src = "src/assets/AtomBePlayer.png";
                if (this.frameX < 70) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                };
            } else if (this.element === "Lithium") {
                this.img.src = "src/assets/AtomLiPlayer.png";
                if (this.frameX < 70) {
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
        if (this.vel[0] < 0 && impulse[0] >0) {
            this.vel[0] += impulse[0]*3;
        }
        if (this.vel[0] > 0 && impulse[0] < 0) {
            this.vel[0] += impulse[0] * 3;
        }
        if (this.vel[1] < 0 && impulse[1] > 0) {
            this.vel[1] += impulse[1] * 3;
        }
        if (this.vel[1] > 0 && impulse[1] < 0) {
            this.vel[1] += impulse[1] * 3;
        }
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];

    };

    switchAtom(){
        if (this.num < 6){
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

    // this is the logics for when player hit against another atom
    collisionAtoms() {
        for (let j = 0; j < this.game.atoms.length; j++) {
            const dx = this.pos[0] - this.game.atoms[j].pos[0];
            const dy = this.pos[1] - this.game.atoms[j].pos[1];
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radius + this.game.atoms[j].radius) {
                if (this.game.atoms[j] instanceof Lithium && this.element === "Fluorine") {
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Beryllium && this.element === "Oxygen"){
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Boron && this.element === "Nitrogen") {
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Nitrogen && this.element === "Boron") {
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Oxygen && this.element === "Beryllium") {
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Fluorine && this.element === "Lithium") {
                    this.game.updateCompound(this.game.atoms[j]);
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                } else if (this.game.atoms[j] instanceof Fluorine && this.element === "Fluorine") {
                    this.game.updateCompound("FF");
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    this.game.substractTimeMsg();
                    this.game.timer -= 3;
                    break;
                } else if ((this.game.atoms[j] instanceof Carbon && this.element === "Oxygen") || (this.game.atoms[j] instanceof Oxygen && this.element === "Carbon")) {
                    this.game.updateCompound("CO");
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    this.game.substractTimeMsg();
                    this.game.timer -= 3;
                    break;
                } else if (this.game.atoms[j] instanceof Oxygen && this.element === "Oxygen") {
                    this.game.updateCompound("OO");
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    this.game.addTimeMsg();
                    this.game.timer += 5;
                    break;
                } else if (this.game.atoms[j] instanceof Nitrogen && this.element === "Nitrogen") {
                    this.game.updateCompound("NN");
                    this.game.remove(this.game.atoms[j]);
                    this.game.scoreOne();
                    break;
                }
                // this.vel[0] = -(this.vel[0]);
                this.game.atoms[j].vel[1] = -(this.vel[1]);
                // this.pos[0] += this.vel[0];
                this.game.atoms[j].vel[0] = -(this.vel[0]);;
            }
        }
    }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

export default Player;