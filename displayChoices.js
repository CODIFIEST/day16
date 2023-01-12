// this function dispalys the choices a character has
// only display cast spell button if the character has spells
//only display weapons or pets buttons if the character has those.
function displayChoices(character) {

    const container = document.getElementById("choices-container")
    container.style.display = "block"
    if (!character.spells[0]) {
        const castSpellButton = document.getElementById("cast-spell")
        castSpellButton.style.display = "none"
    }
    if (!character.weapons[0]) {
        const equipEaponButton = document.getElementById("equip-weapon")
        equipEaponButton.style.display = "none";
    }
    if (!character.pets[0]) {
        const summonPetButton = document.getElementById("summon-pet")
        summonPetButton.style.display = "none";
    }

}
module.exports = displayChoices