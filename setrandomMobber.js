
// setRandomMobber assigns a random mob from the array of mobs, then removes that random mobber from the array
const { Chance } = require("chance");
const chance = new Chance;
const mobs = require("./mobs/mobs")
let randomMobber;
// it ueses the chance import to randomize the selection
function setRandomMobber(){
    randomMobber = mobs[chance.integer({ min: 0, max: (mobs.length - 1) })]
    console.log(randomMobber)
    console.log(`\nNew Mob ${randomMobber.getName()} spawned. watch out!\n`)
    let i = mobs.indexOf(randomMobber);
    if (i > -1) {
        mobs.splice(i, 1)
        console.log(mobs)
    }
    return randomMobber;
}
module.exports = setRandomMobber
