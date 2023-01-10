const config = require("../config/config")
const Weapon = require("./weapon")
const thunderfury = new Weapon(config.weaponNames.thunderfury, 6)
module.exports = thunderfury;