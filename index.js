// main game loop file
// let  a user create a character from a list of the given classes.
//the variable character is goig to represent my character in the game
//it should be the type 'character' from characters/charcters.js and an instance of that character, meaning
// that iti s either a Shaman, warlock, or Mage

const resolve = require("esmify/resolve");
const chooseClass = require("./chooseClass");
const displayCharacterInfo = require("./displayCharacterInfo");
const displayMobInfo = require("./displayMobInfo");
const setRandomMobber = require("./setrandomMobber");
const toggleCharacterDisplay = require("./toggleCharacterDisplay");
// this will be the character chosen by the player
let character;
// this is the current randomly spawned mob, based on the `mob` class
let randomMobber;

const mageButton = document.getElementById("mage");
const shamanButton = document.getElementById("shaman");
const warlockButton = document.getElementById("warlock");
// these buttons will determine the player's class and intialize the game with that class
mageButton.addEventListener("click", function () {
    initGame("Mage")
});
shamanButton.addEventListener("click", function () {
    initGame("Shaman")
})
warlockButton.addEventListener("click", function () {
    initGame("Warlock")
})

// initGame can take a classType and create a new character based on it
// then it toggles the select buttons and displays teh character info
function initGame(classType) {
    character = chooseClass(classType);
    toggleCharacterDisplay();
    displayCharacterInfo(character);
    gameLoop();
}

// gameloop starts with character created and info displayed but no other data initialized
async function gameLoop() {
    randomMobber = setRandomMobber();
    displayMobInfo(randomMobber);

    while (character.getHealth() > 0 && randomMobber.getHealth() > 0) {
        //this is the fight logic
        //display the user's options
        displayChoices(character);

        //now wait for the user to click a button
        const choice = await waitForChoice();
        console.log(choice)

        characterDamage = character.getDamage(choice);
        
        mobdamage = randomMobber.getDamage();
console.log("char damage ", characterDamage);
console.log(mobdamage);
        character.health -= mobdamage;
        randomMobber.health -= characterDamage;
        displayCharacterInfo(character);
        displayMobInfo(randomMobber);

    }
}
// this function dispalys the choices a character has
// only display cast spell button if the character has spells
//only display weapons or pets buttons if the character has those.
function displayChoices(character) {

    const container = document.getElementById("choices-container")
    container.style.display = "block"
    if(!character.spells[0]){
        const castSpellButton = document.getElementById("cast-spell")
        castSpellButton.style.display = "none"
    }
    if(!character.weapons[0]){
        const equipEaponButton = document.getElementById("equip-weapon")
        equipEaponButton.style.display= "none";
    }
    if(!character.pets[0]){
        const summonPetButton = document.getElementById("summon-pet")
        summonPetButton.style.display= "none";
    }

}
function displaySpellChoices(){
    if(character.spells[0]){
        const spellChoicesContainer = document.getElementById("spell-choices-container")
        for(let i=0; i< character.spells.length; i++){
            const mySpell = document.createElement("button")
            mySpell.id =`spell${i}`
            spellChoicesContainer.appendChild(mySpell)
            // const mySpell = document.getElementById(`spell${i}`)
            mySpell.innerHTML = character.spells[i].name;
        }
    
    spellChoicesContainer.style.display = "block";
    }
}

function waitForSpellChoice(){
    let spellChoice;
    const spell0button = document.getElementById("spell0");
    const spell1button = document.getElementById("spell1");
    const spell2button = document.getElementById("spell2");
    return new Promise((resolve)=>{
        spell0button.addEventListener("click", ()=>{
            spellChoice = character.spells[0].name;
            console.log(spellChoice)
            resolve(spellChoice);
        })
        spell1button.addEventListener("click",()=>{
            spellChoice = character.spells[1].name;
            console.log(spellChoice)
            resolve(spellChoice);
        })
        spell2button.addEventListener("click",()=>{
            spellChoice = character.spells[2].name;
            console.log(spellChoice)
            resolve(spellChoice);
        })
    })
}

function waitForChoice() {
    let spellChoice;
    const fightButton = document.getElementById("attack")
    const spellButton = document.getElementById("cast-spell")
    console.log(character)
    return new Promise((resolve)=>{
        fightButton.addEventListener("click", ()=>{
            resolve("fight");  
        })
        spellButton.addEventListener("click", ()=>{
            displaySpellChoices();
            spellChoice = waitForSpellChoice();
            console.log(spellChoice)
            resolve(spellChoice)

        })
    });
  
  
}

