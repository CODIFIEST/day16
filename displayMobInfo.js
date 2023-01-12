
// displayMobInfo displays the random mobber's info to the screen
// it takes an argument of the random mobber
function displayMobInfo(randomMobber){
    const container = document.getElementById("mob-info")
    let mobInfoString = `${randomMobber.getName()} <br />`;
    mobInfoString += `Health: ${randomMobber.getHealth()} <br/>`;
    mobInfoString += `Damage: ${randomMobber.getDamage()}`;
    container.innerHTML = mobInfoString;
}
module.exports = displayMobInfo