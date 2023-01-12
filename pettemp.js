if (character.pets[0]) {
    const petChoicesContainer = document.getElementById("pet-choices-container")
    for (let i = 0; i < character.pets.length; i++) {
        const mypet = document.createElement("button")
        mypet.id = `pet${i}`
        petChoicesContainer.appendChild(mypet)
        mypet.innerHTML = character.pets[i].name;
    }
}