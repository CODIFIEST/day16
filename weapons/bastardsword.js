const config = require("../config/config")
const Weapon = require("./weapon")
const bastardsword = new Weapon(config.weaponNames.bastardsword, 10)
module.exports = bastardsword;