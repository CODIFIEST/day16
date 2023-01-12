class Mob {
    constructor(name, damage, health){
        this.name = name;
        this.damage = damage;
        this.health = health;
    }
    getName(){
        return this.name;
    }
    getDamage(){
        return this.damage;
    }
    getHealth(){
        return this.health;
    }
}
module.exports = Mob;