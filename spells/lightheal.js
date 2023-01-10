const config = require("../config/config");
const Spell = require("./spell")
const lightheal = new Spell(config.spellNames.lightheal, -5, 20)
module.exports = lightheal;