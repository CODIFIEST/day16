const config = require("../config/config");
const Spell = require("./spell")
const Fireball = new Spell(config.spellNames.fireball, 10, 20)
module.exports = Fireball;