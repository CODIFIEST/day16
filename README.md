Game
In our game you can choose a class, level up, cast spells, and attack mobs till you die

# Day 1 of game
I want to be able to level up a character and increase its stats
The stats of each character: 
level attack magic defense speed heath manaa

stats of eahch character
in our game 10 is a very srong trait, the max to start with 1 is the lowest, these are the boundaries we are going to define.

health and mana are different, they have no bounds

Mage is a high mana, high magic but low HP/attack character that starts with fireball spell
Shaman is a mid-range allrounder that starts with a shroom pet, a morningstar, and light heal
Warlock is a high HP, weak character that will deal most of it's damage with summons, and starts with an Imp pet

## GAME RULES

Our game logic dictates a character's damage is calculated using this algorithm:
- If a character has an activePet, we take the activePet's damage a starting value and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add it to the character's magic damage
- If a character has neither an activePet nor a spell, we take their weapon's damage, and add it to the character's attack damage.

## PET LOGIC
A character can have an array of pets, but can only have a single active pet. They have to summon the pet.

## WEAPON LOGIC
A character can have an array of weapons, but can only have a single equipped weapon. They have to equip the weapon

## SPELL LOGIC
A character can have an array of spells, but can only have a single active spell. They have to cast the spell.