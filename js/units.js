function Unit(id, name, element1, element2, type, hp, attackPwr, spAttackPwr, defense, spDefense, speed, evade, crit, confidence, form, attack, description) {
    this.id = id;
    this.name = name;
    this.element1 = element1;
    this.element2 = element2;
    this.type = type;
    this.hp = hp;
    this.attackPwr = attackPwr;
    this.spAttackPwr = spAttackPwr;
    this.defense = defense;
    this.spDefense = spDefense;
    this.speed = speed;
    this.evade = evade;
    this.crit = crit;
    this.confidence = confidence;
    this.form = form;
    this.attack = attack;
    this.level = 1;
    this.exp = 0;
    this.neededExp = 1;
    this.damage = 0;
    this.attackChange = 0;
    this.spAttackChange = 0;
    this.defenseChange = 0;
    this.spDefenseChange = 0;
    this.speedChange = 0;
    this.evadeChange = 0;
    this.critChange = 0;
    this.confChange = 0;
    this.status = "None";
    this.description = description;
}

var unit = [];
var i = 1;
unit[i] = new Unit(i++, "Seed Dropper", "Nature", "None", "Mind", 120, 30, 60, 35, 32, 40, 3, 5, 10, 1, ["attack1", "attack2", "attack3", "attack4"], "Throw those seeds!");
unit[i] = new Unit(i++, "Bush Bloomer", "Nature", "None", "Mind", 150, 42, 70, 50, 48, 52, 3, 7, 14, 2, ["attack1", "attack2", "attack3", "attack4"], "Bloom those bushes!");
unit[i] = new Unit(i++, "Tree Hugger", "Nature", "None", "Mind", 175, 51, 93, 57, 57, 65, 4, 10, 20, 3, ["Tackle", "Tree Hug","Seed Throw","Tree Growth"], "Hug those trees!");



unit[i] = new Unit(i++, "Thunder Blade", "Electricity", "None", "Light", 155, 90, 49, 95, 50, 50, 3, 14, 29, 3,     ["Energy Blast","Thunder","Sword Slash","Bolt Blade"]);



