function Attack(id, name, power, accuracy, type, element, effect, effectChance, description) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.accuracy = accuracy;
    this.type = type; // 0 = physical 1 = physcic
    this.element = element;
    this.effect = effect;
    this.effectChance = effectChance;
    this.description = description;
}

var attack = [];
var i = 1;
//normal
attack["Bash"] = new Attack(i++, "Bash", 55, 85, 0, "Normal", 0, 0, "Charge into your enemy with all your force.");
attack["Sneak Attack"] = new Attack(i++, "Sneak Attack", 90, 75, 0, "Normal", 0, 0, "A strong attack from behind, given they don't notice you.");
attack["Sword Slash"] = new Attack(i++, "Sword Slash", 50, 95, 0, "Normal", 0, 0, "Slash your sword at the enemy.");
attack["Tackle"] = new Attack(i++, "Tackle", 45, 100, 0, "Normal", 0, 0, "Nothing like a plane old tackle to take down your enemy.");


//super natrual


//brawl

//nature
attack["Seed Throw"] = new Attack(i++, "Seed Throw", 40, 100, 0, "Nature", 0, 0, "Through seeds at those you don't like.");
attack["Tree Growth"] = new Attack(i++, "Tree Growth", 85, 85, 1, "Nature", 0, 0, "Grow a tree right under your opponent... SUPRISE!");
attack["Tree Hug"] = new Attack(i++, "TEST", 65, 95, 0, "Nature", 0, 0, "Hug your opponent just like you'd hug a tree!");

//Fire

//Water

//Ice

//Electricity
attack["Bolt Blade"] = new Attack(i++, "Bolt Blade", 85, 100, 0, "Electricity", 0, 0, "Attack with a blade made of electricity!");
attack["Energy Blast"] = new Attack(i++, "Energy Blast", 65, 100, 0, "Electricity", 0, 0, "Charge up your power and blast it out in an attack.");
attack["Thunder"] = new Attack(i++, "Thunder", 100, 80, 1, "Electricity", 0, 0, "Call down thunder to electrify your enemy.");

//Air

//Earth

//Poison

//Cyber
attack["Hack"] = new Attack(i++, "Hack", 60, 85, 1, "Cyber", 0, 0, "Use your advance knowledge to mess with your opponent!");
attack["Lasers"] = new Attack(i++, "Lasers", 80, 100, 1, "Cyber", 0, 0, "Attack your enemy with lasers, nothing can stop them! Hopefully...");

//Time






//attack["TEST"] = new Attack(i++, "TEST", 50, 100, 0, "nature", 0, 0, "DESCRIPTION");




