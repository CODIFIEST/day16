const config = require("../config/config")
const Mob = require("./mob")
const shedevil = new Mob(config.mobNames.shedevil, 4, 69)
module.exports = shedevil;