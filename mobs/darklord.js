const config = require("../config/config")
const Mob = require("./mob")
const darklord = new Mob(config.mobNames.darklord,70,100)
module.exports = darklord;