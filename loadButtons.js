
function loadButtons(character) {
    if (character.spells[0]) {
        const spellChoicesContainer = document.getElementById("spell-choices-container")
        for (let i = 0; i < character.spells.length; i++) {
            const mySpell = document.createElement("button")
            mySpell.id = `spell${i}`
            spellChoicesContainer.appendChild(mySpell)
            // const mySpell = document.getElementById(`spell${i}`)
            mySpell.innerHTML = character.spells[i].name;
        }
    }
    if (character.weapons[0]) {
        const weaponChoicesContainer = document.getElementById("weapon-choices-container")
        for (let i = 0; i < character.weapons.length; i++) {
            const myWeapon = document.createElement("button")
            myWeapon.id = `weapon${i}`
            weaponChoicesContainer.appendChild(myWeapon)
            myWeapon.innerHTML = character.weapons[i].name;
        }
    }
    if (character.pets[0]) {
        const petChoicesContainer = document.getElementById("pet-choices-container")
        for (let i = 0; i < character.pets.length; i++) {
            const mypet = document.createElement("button")
            mypet.id = `pet${i}`
            petChoicesContainer.appendChild(mypet)
            mypet.innerHTML = character.pets[i].name;
        }
    }

}
module.exports = loadButtons