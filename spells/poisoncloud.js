const config = require("../config/config");
const Spell = require("./spell");

const poisoncloud = new Spell(config.spellNames.poisoncloud, 20,30)
module.exports = poisoncloud