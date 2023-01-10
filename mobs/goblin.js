const config = require("../config/config");
const Mob = require("./mob")
const goblin = new Mob(config.mobNames.goblin, 10, 29);
module.exports = goblin;