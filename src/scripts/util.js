const Util= {
    
    random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    },

    inherits(ChildClass, BaseClass) {
        ChildClass.prototype = Object.create(BaseClass.prototype);
        ChildClass.prototype.constructor = ChildClass;
    }
}

module.exports = Util;