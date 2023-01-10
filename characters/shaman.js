const Pet = require ("./pet");
const morningstar = require("../weapons/morningstar")
const bastardsword = require("../weapons/bastardsword")
const lightheal = require("../spells/lightheal")
const Character = require("./character");
const config = require("../config/config");
class Shaman extends Character {
    constructor (name, health){
        //Create the pet inside the constructor like from class
        super (name, config.classNames.ShamanClassName, 60, 6, 8, 3, 1000, 100);
        const pet = new Pet("shroom", 10, "hero's dose");
        this.pets = [];
        this.pets.push(pet);
        this.weapons.push(morningstar);
        this.weapons.push(bastardsword);
        this.spells.push(lightheal);
    }
}
module.exports = Shaman;