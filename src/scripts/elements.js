import Atom from "./atom";
import { inherits } from "./util";

class Lithium {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Lithium, Atom);

class Beryllium {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Beryllium, Atom);

class Boron {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Boron, Atom);

class Carbon {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Carbon, Atom);

class Nitrogen {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Nitrogen, Atom);

class Oxygen {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Oxygen, Atom);

class Fluorine {
    constructor(options) {
        options.vel = options.vel || [0, 0];
        this.img = new Image();
        this.img.src = options.src
        this.img.onload = () => this.draw()
        Atom.call(this, options);
    }
}

inherits(Fluorine, Atom);

export {Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine};