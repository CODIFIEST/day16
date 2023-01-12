// main game loop file
// let  a user create a character from a list of the given classes.
//the variable character is goig to represent my character in the game
//it should be the type 'character' from characters/charcters.js and an instance of that character, meaning
// that iti s either a Shaman, warlock, or Mage

const resolve = require("esmify/resolve");
const chooseClass = require("./chooseClass");
const displayCharacterInfo = require("./displayCharacterInfo");
const displayChoices = require("./displayChoices");
const displayMobInfo = require("./displayMobInfo");
const loadButtons = require("./loadButtons");
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
    loadButtons(character);
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
        const choice = await waitForChoice(character);

        characterDamage = character.getDamage(choice);
        mobdamage = randomMobber.getDamage();
        character.health -= mobdamage;
        if (character.getHealth() < 0){
            alert("Game over loser")
            return;
        }
        randomMobber.health -= characterDamage;
        
        hideButtons();
        displayMobInfo(randomMobber);
        //this loop checks for dead mobbers and end of game
        if (randomMobber.getHealth() < 1) {
            if (mobs.length > 0) {
                randomMobber = setRandomMobber();
                displayMobInfo(randomMobber);
            }else {
            alert("You win")//this is the end of the game
            }
            character.levelUp();
            //this is where the round winning sound/animation goes
        }
        displayCharacterInfo(character);
       
    }
}

function displaySpellChoices(character) {
    if (character.spells[0]) {
        const spellChoicesContainer = document.getElementById("spell-choices-container")
        spellChoicesContainer.style.display = "block";
    }
}
function displayWeaponChoices(character) {
    if (character.weapons[0]) {
        const weaponChoicesContainer = document.getElementById("weapon-choices-container");
        weaponChoicesContainer.style.display = "block"
    }
}
function displaypetChoices(character) {
    if (character.pets[0]) {
        const petChoicesContainer = document.getElementById("pet-choices-container");
        petChoicesContainer.style.display = "block"
    }
}
function hideButtons() {
    const spellChoicesContainer = document.getElementById("spell-choices-container")
    spellChoicesContainer.style.display = "none";
    const weaponChoicesContainer = document.getElementById("weapon-choices-container");
    weaponChoicesContainer.style.display = "none"
    const petChoicesContainer = document.getElementById("pet-choices-container");
    petChoicesContainer.style.display = "none"
}

function waitForSpellChoice(character) {
    let spellChoice;
    const spell0button = document.getElementById("spell0");
    const spell1button = document.getElementById("spell1");
    const spell2button = document.getElementById("spell2");
    return new Promise((resolve) => {
        spell0button.addEventListener("click", () => {
            spellChoice = character.spells[0].name;
            console.log(spellChoice)
            resolve(spellChoice);
        })
        if (spell1button) {
            spell1button.addEventListener("click", () => {
                spellChoice = character.spells[1].name;
                console.log(spellChoice)
                resolve(spellChoice);
            })
        }
        if (spell2button) {
            spell2button.addEventListener("click", () => {
                spellChoice = character.spells[2].name;
                console.log(spellChoice)
                resolve(spellChoice);
            })
        }
    })
}

function waitForweaponChoice(character) {
    let weaponChoice;
    const weapon0button = document.getElementById("weapon0");
    const weapon1button = document.getElementById("weapon1");
    const weapon2button = document.getElementById("weapon2");
    return new Promise((resolve) => {
        weapon0button.addEventListener("click", () => {
            weaponChoice = character.weapons[0].name;
            console.log(weaponChoice)
            resolve(weaponChoice);
        })
        if (weapon1button) {
            weapon1button.addEventListener("click", () => {
                weaponChoice = character.weapons[1].name;
                console.log(weaponChoice)
                resolve(weaponChoice);
            })
        }
        if (weapon2button) {
            weapon2button.addEventListener("click", () => {
                weaponChoice = character.weapons[2].name;
                console.log(weaponChoice)
                resolve(weaponChoice);
            })
        }
    })
}
function waitForpetChoice(character) {
    let petChoice;
    const pet0button = document.getElementById("pet0");
    const pet1button = document.getElementById("pet1");
    const pet2button = document.getElementById("pet2");
    return new Promise((resolve) => {
        pet0button.addEventListener("click", () => {
            petChoice = character.pets[0].name;
            console.log(petChoice)
            resolve(petChoice);
        })
        if (pet1button) {
            pet1button.addEventListener("click", () => {
                petChoice = character.pets[1].name;
                console.log(petChoice)
                resolve(petChoice);
            })
        }
        if (pet2button) {
            pet2button.addEventListener("click", () => {
                petChoice = character.pets[2].name;
                console.log(petChoice)
                resolve(petChoice);
            })
        }
    })
}

function waitForChoice(character) {
    let waitChoice;
    const fightButton = document.getElementById("attack")
    const spellButton = document.getElementById("cast-spell")
    const weaponButton = document.getElementById("equip-weapon")
    const petButton = document.getElementById("summon-pet")
    console.log(character)
    return new Promise((resolve) => {
        fightButton.addEventListener("click", () => {
            resolve("fight");
        })
        spellButton.addEventListener("click", () => {
            displaySpellChoices(character);
            waitChoice = waitForSpellChoice(character);
            console.log(waitChoice)
            resolve(waitChoice)
        })
        weaponButton.addEventListener("click", () => {
            displayWeaponChoices(character);
            waitChoice = waitForweaponChoice(character);
            console.log(waitChoice)

            resolve(waitChoice)
        })
        petButton.addEventListener("click", () => {
            displaypetChoices(character);
            waitChoice = waitForpetChoice(character);
            console.log(waitChoice)

            resolve(waitChoice)
        })
    });



}
