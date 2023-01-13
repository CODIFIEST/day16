// this function dispalys the choices a character has
// only display cast spell button if the character has spells
//only display weapons or pets buttons if the character has those.
function displayChoices(character) {

    const container = document.getElementById("choices-container")
    container.style.display = "block"
    if (character.weapons[0]) {
        const weaponButton = document.getElementById("equip-weapon")
        weaponButton.style.display = "inline-block"
    }

    if (character.pets[0]) {
        const petButton = document.getElementById("summon-pet")
        petButton.style.display = "inline-block"
    }
    if (character.spells[0]){
        const spellButton = document.getElementById("cast-spell")
        spellButton.style.display = "inline-block"

    }
}
module.exports = displayChoices


// function displaySpellChoices(character) {
//     if (character.spells[0]) {
//         const spellChoicesContainer = document.getElementById("spell-choices-container")
//         spellChoicesContainer.style.display = "block";
//     }
// } 
// module.exports = displaySpellChoices

// function displayWeaponChoices(character) {
//     if (character.weapons[0]) {
//         const weaponChoicesContainer = document.getElementById("weapon-choices-container");
//         weaponChoicesContainer.style.display = "block"
//     }
// }
// module.exports = displayWeaponChoices

// function displaypetChoices(character) {
//     if (character.pets[0]) {
//         const petChoicesContainer = document.getElementById("pet-choices-container");
//         petChoicesContainer.style.display = "block"
//     }
// }
// module.exports = displaypetChoices