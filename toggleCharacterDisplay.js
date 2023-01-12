
//this hides the select buttons and unhides the info block
function toggleCharacterDisplay(){
    const characterSelectContainer = document.getElementById("character-select-container");
    characterSelectContainer.style.display = "none";

    const characterInfo = document.getElementById("character-info-container");
    characterInfo.style.display = "inline-block";

    const mobInfo = document.getElementById("mob-info-container");
    mobInfo.style.display = "inline-block";

}
module.exports = toggleCharacterDisplay