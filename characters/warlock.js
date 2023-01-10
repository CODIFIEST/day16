const Pet = require("./pet")
const Character = require ("./character");
const config = require("../config/config");
class Warlock extends Character {
    constructor(name){
        super(name, config.classNames.WarlockClassName, 3, 3, 7, 5, 200, 100);
        //every warlock starts with an imp as its first pet
        const pet = new Pet("imp", 4, "infernal");
        this.name = name;
        this.pets = [];
        this.pets.push(pet);
    }
}
module.exports = Warlock;
