const config = require("../config/config")
const Mob = require("./mob")
const ork = new Mob(config.mobNames.ork, 20, 21)
module.exports = ork;