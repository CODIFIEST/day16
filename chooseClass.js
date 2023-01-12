const Mage = require("./characters/mage");
const Shaman = require("./characters/shaman");
const Warlock = require("./characters/warlock");
const config = require("./config/config");

function chooseClass(classType){
    if(classType === config.classNames.MageClassName){
        return  new Mage("Channing Taintum");
    }else if (classType === config.classNames.ShamanClassName){
        return  new Shaman("Pauly Stamets");
    }else if (classType === config.classNames.WarlockClassName){
        return  new Warlock("Wonklock")
    };
};
module.exports = chooseClass;