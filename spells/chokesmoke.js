const config = require("../config/config");
const Spell = require("./spell");

const chokesmoke = new Spell(config.spellNames.chokesmoke, 7, 10)
module.exports = chokesmoke;