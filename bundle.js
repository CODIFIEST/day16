(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//bring in spells.js
const config = require("../config/config");
const Spell = require("../spells/spell")
//bring in config too

//Base Character class that takes in the following constructor arguments:
//name, className, attack, magic, defense, speed, health, mana, and sets the on the character
//constructor should also initialize 3 empty arrays for weapons, pets, and spells
class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana){
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense= defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
        this.activePet = null;
        this.activeWeapon = null;
        this.activeSpell = null;

    }
    levelUp(){
        this.level += 1;
        if (this.className === config.classNames.ShamanClassName){
            this.attack = this.attack + 1;
            this.health = this.health + 11;
            this.mana = this.mana +2;
        }
        else if (this.className === config.classNames.MageClassName){
            this.mana = this.mana + 17;
            this.magic = this.magic + 1;
        }
        else if (this.className === config.classNames.WarlockClassName){
            this.mana = this.mana + 11;
            this.health = this.health + 29;
            this.speed = this.speed +1;
        }
    }

    getDamage(spellPetWeapon){
        if (spellPetWeapon){
            const spell = this.spells.find(s => s.name === spellPetWeapon);
            const pet = this.pets.find(s => s.name === spellPetWeapon);
            const weapon = this.weapons.find(s => s.name === spellPetWeapon);
            if (spell){
                if(this.mana < spell.mana){
                    console.log("you need more mana to cast", spell);
                    return 0;
                }
                this.mana -=spell.mana;
                return spell.power + this.magic;
            } 
            else if (pet){
                const petDamage = pet.damage;
                const magicDamage = this.magic;
                return petDamage + magicDamage;
            }
            else if (weapon){
                const weaponDamage = weapon.damage;
                return this.attack + weaponDamage;
            }
            else {
                return this.attack;
            }
        }
    }
            // keep track of a character's active pet. if there is one, get the pet's damage and add it
            // to the character's magic damage
            // ///////////////////////////////////////////////////
            // this section removed to use objects instead of strings and to be able to pass
            // in to getdamage either a pet, spell, or weapeon
            // if(this.activePet===spellPetWeapon){
            //     const petDamage = this.activePet.damage;
            //     const magicDamage = this.magic;
            //     return petDamage + magicDamage;
            // } 
            // else if(this.activeSpell===spellPetWeapon){
                
            //     const spellPower = this.activeSpell.power;
            //     const magicPower = this.magic;
            // // this was to verify compute   console.log (magicPower, "magic damage and spell damage", spellPower);
            //     return spellPower + magicPower;
            // }
            // else if(this.activeWeapon===spellPetWeapon){
            //     const weaponDamage = this.activeWeapon.damage;
            //     return this.attack + weaponDamage;
            // }
            // /////////////////////////////////////////////////////////
        
    // add a new pet to the character's pets array
    addPet(petName){
        this.pets.push(petName);
    }
    summonPet(petName){
        // if we have a pet in our this.pets array, that maches the name passed in as an argument to this function
        // lets summon it
        // we can loop over the pets we have to find it.
        for (let i=0; i < this.pets.length; i++){
            const pet = this.pets[i]; //this pet is an individual pet element in the pets array
            if(pet.name === petName){
                this.activeSpell = null;
                this.activeWeapon = null;
                this.activePet = pet;
            }

        }
    }
    // add a spell to the character's spells array
    addSpell(spellName){
        this.spells.push(spellName);
    }
    //cast the activeSpell and cause damage
    castSpell(spellName){
        for(let i=0; i < this.spells.length; i++){
            const spell = this.spells[i];
            if (spell.name === spellName && this.mana != 0 && this.mana >= this.spells[i].mana){
                this.activeWeapon = null;
                this.activePet = null;
                this.activeSpell = spell;
            }
        }
    }
    //this adds a new weapon to the character's weapons array
    addWeapon(weaponName){
        this.weapons.push(weaponName);
    }

    //this equips the named weapon to the character's activeWeapon
    equipWeapon(weaponName){
        for (let i=0; i< this.weapons.length; i++){
            const weapon = this.weapons[i];
            if (weapon.name === weaponName){
                this.activePet = null;
                this.activeSpell = null;
                this.activeWeapon = weapon;
            }
        }
    }
} 

module.exports = Character;
},{"../config/config":6,"../spells/spell":10}],2:[function(require,module,exports){
const Character = require("./character")
const fireball = require("../spells/fireball");
const config = require("../config/config");
class Mage extends Character{
    constructor(name){
        super(name, config.classNames.MageClassName, 2, 7, 3, 5, 50, 200);
        this.spells.push(fireball);
    }
}
module.exports = Mage;
},{"../config/config":6,"../spells/fireball":8,"./character":1}],3:[function(require,module,exports){
class Pet{
    constructor(name, damage, damageType){
        this.name = name;
        this.damage = damage;
        this.damageType= damageType;
    }
  
}
module.exports = Pet;
},{}],4:[function(require,module,exports){
const Pet = require ("./pet");
const morningstar = require("../weapons/morningstar")
const bastardsword = require("../weapons/bastardsword")
const lightheal = require("../spells/lightheal")
const Character = require("./character");
const config = require("../config/config");
class Shaman extends Character {
    constructor (name, health){
        //Create the pet inside the constructor like from class
        super (name, config.classNames.ShamanClassName, 60, 6, 8, 3, 1000, 100);
        const pet = new Pet("shroom", 10, "hero's dose");
        this.pets = [];
        this.pets.push(pet);
        this.weapons.push(morningstar);
        this.weapons.push(bastardsword);
        this.spells.push(lightheal);
    }
}
module.exports = Shaman;
},{"../config/config":6,"../spells/lightheal":9,"../weapons/bastardsword":11,"../weapons/morningstar":12,"./character":1,"./pet":3}],5:[function(require,module,exports){
const Pet = require("./pet")
const Character = require ("./character");
const config = require("../config/config");
class Warlock extends Character {
    constructor(name){
        super(name, config.classNames.WarlockClassName, 3, 3, 7, 5, 200, 100);
        //every warlock starts with an imp as its first pet
        const pet = new Pet("imp", 4, "infernal");
        this.name = name;
        this.pets = [];
        this.pets.push(pet);
    }
}
module.exports = Warlock;

},{"../config/config":6,"./character":1,"./pet":3}],6:[function(require,module,exports){
const config = {
    classNames:{
        MageClassName: "Mage",
        ShamanClassName: "Shaman",
        WarlockClassName: "Warlock"
    },

    spellNames:{
        fireball: "Fireball",
        lightheal: "Light Heal",
        poisoncloud: "Poison Cloud"
    },
    weaponNames: {
        morningstar: "Morning Star",
        bastardsword: "Bastard Sword",
        thunderfury: "Thunder Fury"
    },
    mobNames: {
        goblin: "Gobblin Deez Nutz",
        shedevil: "Yo Mama",
        ork: "Mork",
        pteradactyl: "Pteradactyl Spelling Bee",
        darklord: "Darth Vader"
    }

 }
module.exports = config;
},{}],7:[function(require,module,exports){
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
},{"./characters/mage":2,"./characters/shaman":4,"./characters/warlock":5,"./config/config":6}],8:[function(require,module,exports){
const config = require("../config/config");
const Spell = require("./spell")
const Fireball = new Spell(config.spellNames.fireball, 10, 20)
module.exports = Fireball;
},{"../config/config":6,"./spell":10}],9:[function(require,module,exports){
const config = require("../config/config");
const Spell = require("./spell")
const lightheal = new Spell(config.spellNames.lightheal, -5, 20)
module.exports = lightheal;
},{"../config/config":6,"./spell":10}],10:[function(require,module,exports){
class Spell {
    constructor(name, power, mana){
        this.name = name;
        this.level = 1;
        this.power = power;
        this.mana = mana;
    }
}
module.exports = Spell;
},{}],11:[function(require,module,exports){
const config = require("../config/config")
const Weapon = require("./weapon")
const bastardsword = new Weapon(config.weaponNames.bastardsword, 10)
module.exports = bastardsword;
},{"../config/config":6,"./weapon":13}],12:[function(require,module,exports){
const config = require("../config/config");
const Weapon = require("./weapon")
const morningstar = new Weapon(config.weaponNames.morningstar, 7)
module.exports = morningstar;
},{"../config/config":6,"./weapon":13}],13:[function(require,module,exports){
class Weapon {
    constructor(name, damage){
        this.name = name;
        this.damage = damage;
    }
}
module.exports = Weapon;
},{}]},{},[7]);
