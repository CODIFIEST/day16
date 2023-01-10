//this is where we put our game logic
//we will put the mechanics of our game here, and slowly
//build it over the next few lessons
// import { console.log } from ('./console.log') // gdi this isn't working
//const wrastle =  require ("./fight")
//These characters are removed for simplicity.
// const Paladin = require("./paladin");
// const paladin = new Paladin ("Wonky");

// const Gambler = require("./gambler");
// const gambler = new Gambler ("Kenny Rodgers", 100);

// const Medic = require("./medic");
// const medic = new Medic ("Strange");

// const Warrior = require("./warrior");
// const warrior = new Warrior ("Xena");

// console.log (warrior);
// console.log (paladin);
// console.log (gambler);
// console.log (medic);

// day what? 
const Warlock = require("./characters/warlock");
 const warlock = new Warlock ("WonkyLock");

const Mage = require("./characters/mage");
 const mage = new Mage ("Channing Tatum");

const Shaman = require("./characters/shaman");
 const shaman = new Shaman ("Paul Stamets");
 //HW day 8 
 //Create a mobs folder, mobs class, and some mobs, as well as a mobs array that stores all your mobs.
 const DarkLord = require("./mobs/darklord")
 const darklord = DarkLord;

 const Goblin = require ("./mobs/goblin")
 const goblin = Goblin;
 
 const Ork = require ("./mobs/ork")
 const ork = Ork;

 const Pteradactyl = require("./mobs/pteradactyl")
 const pteradactyl = Pteradactyl;

const SheDevil = require ("./mobs/shedevil")
const shedevil = SheDevil;

 const mobs =[
    darklord,
    goblin,
    ork,
    pteradactyl,
    shedevil
 ]
//check to see if mobs working, then comment out
///////////// console.log("here is the random mob list \n", mobs);
//const Goblin = require("./mobs/goblin")

//we want to prompt the user to make decisions, so we need to use a prompt library
//in game.js, you can require the prompt-promise package the same way you require local stuff! const prompt = require("prompt-promise")
const prompt = require ("prompt-promise");

//if we are going to use the naming presets, we have to include config
const config = require("./config/config");

//testing the chance.js library
const Chance = require('chance')
const chance = new Chance;
// use chance to pick a random mobber. pick it from the array.
let randomMobber = mobs[chance.integer({min:0, max: (mobs.length-1)})]
// console.log("the random mobber is ", randomMobber)
// console.log(randomMobber.name, "jumps out and attacks you! Inflicting", randomMobber.damage, "damage");


///////////////////////////////////////////////////
// GAME TIME
// - Choose a class, instantiate your character based on that class. Throw an error if that class is not available.
async function gameloop(){
    // in the game loop, at the start I want to get the clas choice from the user
    // they can pick shaman, warlock or mage

    // im going to store my character in this variable once i pick a class
    // i will create that class, and put it in the character variable
    let character;
   while (!character){
        const classChoice = await prompt("Select your class: press 1 for shaman, 2 for warlock, or 3 for mage \n")

        if (classChoice === "1"){
            character = shaman;
        }else if(classChoice === "2"){
            character = warlock;
        }else if (classChoice === "3"){
            character = mage;
        }else {
            console.log("try again shithead, that is not 1,2 or 3")
        }     
       
    }
//    console.log ("your character deals", character.getDamage(),"\n or" ,character.attack); 

////////////mobattack loop
    function mobAttack(){
        console.log(randomMobber.name, " attacks you! Inflicting", randomMobber.damage, "damage and has", randomMobber.health, "health remaining");
    // subtract damage automatically just because
        character.health -= randomMobber.damage;
        console.log(character.name, "only has", character.health, "HP left\n\n")
    }
/////////////////////////
//I am going to put the weaponloop here so it knows what character and the function is delcared before attackloop
///////////////////////////////////////////////
    //     else {
    //    console.error("try again shithead, that is not 1,2 or 3")}
    //     }\\\\\\\\\\\\\\\\\\\\
    /////////////////////////////////////////////////////////////////
    async function attackloop(){
       while ((character.health > 0) && (randomMobber.health > 0)){   
            let yourMove;
            while(!yourMove){
                console.log("You can attack, equip a weapon, summon a pet, or cast a spell each turn")
                const killMob = await prompt("Press 1 2 3 or 4. If you press something else, you WILL lose a turn. kek\n")
                if (killMob === "1"){
                    yourMove = true;
                    randomMobber.health -= character.attack;
                    console.log("KERSPLAT!!!",randomMobber.name,"has", randomMobber.health, "health left")    
                    mobAttack();        
                }  
                else if(killMob === "2"){
                    yourMove = true;
                    await weaponLoop();
                    // console.log(randomMobber.name, "mid weapon switching attacks you! Inflicting", randomMobber.damage, "damage and has", randomMobber.health, "health remaining");

                    // // subtract damage automatically just because
                    //         character.health -= randomMobber.damage;
                    //         console.log(character.name, "only has", character.health, "HP left\n\n")
                            mobAttack();    
                }
                
                else if(killMob === "3"){
                    yourMove = true;
                    await petLoop();
                    mobAttack();
                }
                else if(killMob === "4"){
                    yourMove = true;
                    await spellLoop();
                    mobAttack();
                }
                else{
                    yourMove = true;
                    console.log("You can't do that, press 1,2,3, or 4\n")
                    console.log(randomMobber.name, "knows you are fumbling and attacks you! Inflicting", randomMobber.damage, "damage and has", randomMobber.health, "health remaining");

                    // subtract damage automatically just because
                            character.health -= randomMobber.damage;
                            console.log(character.name, "only has", character.health, "HP left\n\n")
                    //console.log("OR 3rd place do we get here?")
                  //  mobAttack();
                }
            }
        }   
    }
    // Here we choose a weapon
    //build in some catches for pressing wrong buttons
    async function weaponLoop(){
       // yes we do. console.log("do we get here?")
      //  console.log(character.weapons[0]);
        for(let i=0; i<character.weapons.length;i++){
            console.log("Press ", (i+1), " for ", character.weapons[i])
        }
        const myWeapon = await prompt("What weapon do you want to equip?\n");
        if(character.weapons[parseInt(myWeapon)-1]){
            if(myWeapon==="1"){
                let elementOfArray = character.weapons[parseInt(myWeapon)-1];
                randomMobber.health-= character.getDamage(elementOfArray.name);
                console.log("BOINK!!! You attack, doing",character.getDamage(elementOfArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
            }
            else if(myWeapon==="2"){
                let elementOfArray = character.weapons[parseInt(myWeapon)-1];
                randomMobber.health-= character.getDamage(elementOfArray.name);
                console.log("BOINK!!! You attack, doing",character.getDamage(elementOfArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
            }
            else if(myWeapon==="3"){
                let elementOfArray = character.weapons[parseInt(myWeapon)-1];
                randomMobber.health-= character.getDamage(elementOfArray.name);
                console.log("BOINK!!! You attack, doing",character.getDamage(elementOfArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
            }
        }
    }

    async function spellLoop(){
        for(let i=0; i<character.spells.length;i++){
            console.log("Press ", (i+1), " for ", character.spells[i])
        }
        const mySpell = await prompt("what spell do you want to cast?\n")
        if(character.spells[parseInt(mySpell)-1]){
            if (mySpell==="1"){
                let elementOfSpellArray = character.spells[parseInt(mySpell)-1];
                randomMobber.health-= character.getDamage(elementOfSpellArray.name);
                console.log (elementOfSpellArray)
                console.log("SHAZZZAM!! You cast a",elementOfSpellArray.name ,"spell, doing",character.getDamage(elementOfSpellArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
        
            }
            else if(mySpell==="2"){
                let elementOfSpellArray = character.spells[parseInt(mySpell)-1];
                randomMobber.health-= character.getDamage(elementOfSpellArray.name);
                console.log (elementOfSpellArray)
                console.log("SHAZZZAM!! You cast a",elementOfSpellArray.name ,"spell, doing",character.getDamage(elementOfSpellArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
        
            }
            else{
                mobAttack();
            }
        }
    }

    async function petLoop(){
        for(let i=0; i<character.pets.length;i++){
            console.log("Press ", (i+1), " for ", character.pets[i])
        }  
        const myPet = await prompt("What pet do you want to summon?\n")
        if(character.pets[parseInt(myPet)-1]){
            if (myPet==="1"){
                let elementOfPetArray = character.pets[parseInt(myPet)-1]
                randomMobber.health-= character.getDamage(elementOfPetArray.name);
 //               console.log (elementOfPetArray)
                console.log("BIPPITY BOOP!!!You summoned a",elementOfPetArray.name ,"spell, doing",character.getDamage(elementOfPetArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
        
            }
            else  if (myPet==="2"){
                let elementOfPetArray = character.pets[parseInt(myPet)-1]
                randomMobber.health-= character.getDamage(elementOfPetArray.name);
  //              console.log (elementOfPetArray)
                console.log("BIPPITY BOOP!!!You summoned a",elementOfPetArray.name ,"spell, doing",character.getDamage(elementOfPetArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
        
            }
            else  if (myPet==="3"){
                let elementOfPetArray = character.pets[parseInt(myPet)-1]
                randomMobber.health-= character.getDamage(elementOfPetArray.name);
  //              console.log (elementOfPetArray)
                console.log("BIPPITY BOOP!!!You summoned a",elementOfPetArray.name ,"spell, doing",character.getDamage(elementOfPetArray.name), "damage.\n",randomMobber.name,"has", randomMobber.health, "health left")                 
        
            }
        }    
    }
    //////////////////////////////////////////////////////
    //THS IS WHERE THE GAME STARTS
    console.log("I chose a", character.className, "named", character.name, "and now it's too late to go back.");
    console.log(character);
    console.log(character.name, "starts with", character.health, "HP and ", character.attack, "attack damage.\n\nOh shit!\n");
    console.log(randomMobber.name, "jumps out and attacks you! Inflicting", randomMobber.damage, "damage");
    // subtract damage automatically just because
    character.health -= randomMobber.damage;
    console.log(character.name, "only has", character.health, "HP left")
    
    while (character.health > 0){
    
    await attackloop();
    character.levelUp();
    //TEMPLATE LITERALS 'BLAH BLAH $(character)
    console.log(`You have leveled up. You are now level ${character.level}`)
    randomMobber = mobs[chance.integer({min:0, max: (mobs.length-1)})]
    console.log(`\nNew Mob ${randomMobber.name} spawned. watch out!\n`)
 //   mobAttack();


    //console.log("do we get here?")
    }
    console.log("game over douche")
    console.log("press ctrl-c to quit");
}
    console.log("press ctrl-c anytime to quit");
    gameloop();