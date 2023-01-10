const config = require("../config/config")
const Mob = require("./mob")
const pteradactyl = new Mob(config.mobNames.pteradactyl, 15, 40)
module.exports = pteradactyl;