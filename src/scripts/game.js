const Atom = require("./atom");
// const Player = require("./player");
// const Util = require("./util");

function Game(){
    this.atoms = [];
    this.players =[];
    //potential feature: instead of player being the atom, the player is a spaceship that hold the atom in front.
}



Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.FPS = 32;
Game.NUM_ATOMS = 9;
Game.NUM_PLAYERS= 7;

Game.prototype.addAtom = function() {
    while(this.atoms.length < Game.NUM_ATOMS) {
        let newAtom= new Atom({pos: [0,0], game: this});
        this.atoms.push(newAtom);
    }
}

Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (let i= 0; i< this.atoms.length; i++){
        this.atoms[i].draw(ctx);
    }

    // this.allObjects().forEach(function (object) {
    //     object.draw(ctx);
    // });
};

module.exports = Game;
