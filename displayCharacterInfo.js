
// this function should get all the info we want to display and displays it.
function displayCharacterInfo(character){
    const container = document.getElementById("character-info")
    let charInfoString = `${character.getName()}<br/>
         Level ${character.getLevel()} ${character.getClassName()} <br/>`;
    charInfoString += `Stats: ${character.getStats()}`
    container.innerHTML = charInfoString;
    };
    module.exports = displayCharacterInfo