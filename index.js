// main game loop file
// let  a user create a character from a list of the given classes.
//the variable character is goig to represent my character in the game
//it should be the type 'character' from characters/charcters.js and an instance of that character, meaning
// that iti s either a Shaman, warlock, or Mage

console.log("hello from bundlerama");

const Mage = require("./characters/mage");
const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const config = require("./config/config");

let character;
function chooseClass(classType) {
    if(classType === config.classNames.MageClassName){
        character = new Mage("Channing Taintum");
    }else if (classType === config.classNames.ShamanClassName){
        character = new Shaman("Pauly Stamets");
    }else if (classType === config.classNames.WarlockClassName){
        character = new Warlock("Wonklock")
    }
    console.log(character)
    toggleCharacterDisplay();
}
const mageButton = document.getElementById("mage");
const shamanButton = document.getElementById("shaman");
const warlockButton = document.getElementById("warlock");

mageButton.addEventListener("click", function(){
    chooseClass("Mage")

});
shamanButton.addEventListener("click", function(){
    chooseClass("Shaman")
})
warlockButton.addEventListener("click", function(){
    chooseClass("Warlock")
})
function toggleCharacterDisplay(){
    const characterSelectContainer = document.getElementById("character-select-container");
    characterSelectContainer.style.display = "none";

    const characterInfo = document.getElementById("character-info-container");
    characterInfo.style.display = "block";
}