//Create a mobs folder, mobs class, and some mobs, as well as a mobs array that stores all your mobs.
const darklord = require("./darklord")


const goblin = require("./goblin")


const ork = require("./ork")


const pteradactyl = require("./pteradactyl")


const shedevil = require("./shedevil")


// const mob = require("./mobs/mob")
mobs = [
    darklord,
    goblin,
    ork,
    pteradactyl,
    shedevil
]
module.exports = mobs;