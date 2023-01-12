class Pet{
    constructor(name, damage, damageType){
        this.name = name;
        this.damage = damage;
        this.damageType= damageType;
    }
    getName(){
        return this.name;
    }
  
}
module.exports = Pet;