const Atom = require("./atom");
const Util = require("./util");

function Lithium(options) {
    options.vel = options.vel || [0, 0];
    
    // Atom.call(this, options);
}

Util.inherits(Lithium, Atom);

Lithium.prototype.collide= function (){
    
}

module.exports = Lithium;