const config = require("../config/config");
const Weapon = require("./weapon")
const morningstar = new Weapon(config.weaponNames.morningstar, 7)
module.exports = morningstar;