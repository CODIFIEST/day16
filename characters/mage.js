const Character = require("./character")
const fireball = require("../spells/fireball");
const config = require("../config/config");
class Mage extends Character{
    constructor(name){
        super(name, config.classNames.MageClassName, 2, 7, 3, 5, 50, 200);
        this.spells.push(fireball);
    }
}
module.exports = Mage;