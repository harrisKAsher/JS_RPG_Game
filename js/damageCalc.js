var displayMessage = -1;
var userAttack;
var opponitAttack;
var damage;
var order;
function runMove(playerUnit, opponitUnit, playerChoice){
    ctx.fillStyle = "black";
    if(displayMessage === -1){

    userAttack = attack[playerUnit.attack[playerChoice]];

    var opponitChoice = Math.floor(Math.random() * 4);
    opponitAttack = attack[opponitUnit.attack[opponitChoice]];


    order = orderCalculator(playerUnit, opponitUnit);

    damage = 0;
    }

    if(order === 0){
        if(displayMessage === -1){
            damage = damageCalculator(playerUnit, opponitUnit, userAttack);
            displayMessage++;
        }
        if(damage !=0){
                if(displayMessage === 0){
                    ctx.fillText("You did " + damage + " to the enemy!",380,200);
                    if(keyStatus.space && release){
                        release = false;
                        displayMessage++;
                        opponitUnit.damage += damage;
                    }
                }
                if(opponitUnit.hp <= opponitUnit.damage){
                    if(displayMessage === 1){
                        ctx.fillText("You KOed the enemy!",380,365);
                        if(keyStatus.space && release){
                            release = false;
                            displayMessage === 100;
                        }
                    }
            }
        } else{
            if(displayMessage === 0){
                ctx.fillText("You missed!",340,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                }
            }
        }
        if(displayMessage === 1){
            damage = damageCalculator(opponitUnit, playerUnit, opponitAttack);
            displayMessage++
        }
        if(damage !=0){
            if(displayMessage === 2){
                ctx.fillText("They did " + damage + " to you!",380,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                    playerUnit.damage += damage;
                }
            }
            if(playerUnit.hp <= playerUnit.damage){
                if(displayMessage === 3){
                    ctx.fillText("The enemy KOed you!",380,365);
                    if(keyStatus.space && release){
                        release = false;
                        displayMessage === 100;
                    }
                }
            }



        } else{
            if(displayMessage === 2){
                ctx.fillText("They missed!",340,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                }
            }
        }




    }else{
        if(displayMessage === -1){
            damage = damageCalculator(opponitUnit, playerUnit, opponitAttack);
            displayMessage++;
        }
        if(damage !=0){
            if(displayMessage === 0){
                ctx.fillText("They did " + damage + " to you!",380,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                    playerUnit.damage += damage;
                }
            }
            if(playerUnit.hp <= playerUnit.damage){
                if(displayMessage === 1){
                    ctx.fillText("They KOed you!",380,365);
                    if(keyStatus.space && release){
                        release = false;
                        displayMessage === 100;
                    }
                }
            }
        } else{
            if(displayMessage === 0){
                ctx.fillText("They missed!",380,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                }
            }
        }
        if(displayMessage === 1){
            damage = damageCalculator(playerUnit, opponitUnit, userAttack);
            displayMessage++;
        }
        if(damage !=0){
            if(displayMessage === 2){
                ctx.fillText("You did " + damage + " to them!",380,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                    opponitUnit.damage += damage;
                }
            }
            if(opponitUnit.hp <= opponitUnit.damage){
                if(displayMessage === 3){
                    ctx.fillText("You KOed the enemy!",380,365);
                    if(keyStatus.space && release){
                        release = false;
                        displayMessage === 100;
                    }
                }
            }
        } else{
            if(displayMessage === 2){
                ctx.fillText("You missed!",340,365);
                if(keyStatus.space && release){
                    release = false;
                    displayMessage++;
                }
            }
        }
    }

    if(displayMessage == 3){
        displayMessage = -1;
        select = 0;
    }
}





//calculates who attacks first.
function orderCalculator(unitA, unitB){
    var randNum = Math.floor(Math.random() * 2);
    if(unitA.speed > unitB.speed){
        return 0;
    } else if(unitA.getSpeed() < unitB.getSpeed()){
        return 1;
    }else{
        return randNum.nextInt(2);
    }




}
//HashMap<String, Integer> elementMap, HashMap<String, Integer> typeMap
function damageCalculator(unitA, unitB, attack){




    var damage = 0;
    if(attack.accuracy > Math.floor(Math.random()*100)+1){


        var eleAdvantage1 = elementTable[element[attack.element]][element[unitB.element1]];
        var eleAdvantage2 = elementTable[element[attack.element]][element[unitB.element2]];

        var matchEleBonus = 1; //moveElementMatchBonus
        if(attack.element === unitA.element1 || attack.element === unitA.element2){
            matchEleBonus = 1.25;
        }

        //Mind Light Dark bonus
        var confBonus = 1;
        //Mind(1) --> Light(3) ---> Dark(2) --> Mind
        if(type[unitA.type] === 1){
            if(type[unitB.type] === 2){
                if(Math.floor(Math.random()*100)+1 < unitB.confidence){
                    confBonus = .75;
                }
            }else if(type[unitA.type] === 3){
                if(Math.floor(Math.random()*100)+1 < unitA.confidence){
                    confBonus = 1.25;
                }
            }
        } else if(type[unitA.type] === 2){
            if(type[unitB.type] === 1){
                if(Math.floor(Math.random()*100)+1 < unitA.confidence){
                    confBonus = 1.25;
                }
            }else if(type[unitA.type] === 3){
                if(Math.floor(Math.random()*100)+1 < unitB.confidence){
                    confBonus = .75;
                }
            }
        } else if(type[unitA.type] === 3){
            if(type[unitB.type] === 1){
                if(Math.floor(Math.random()*100)+1 < unitB.confidence){
                    confBonus = .75;
                }
             }else if(type[unitA.type] === 2){
                 if(Math.floor(Math.random()*100)+1 < unitA.confidence){
                    confBonus = 1.25;
                }
            }
        }

        var crit = 1;
        if(Math.floor(Math.random()*100)+1 < unitA.crit){
            crit = 2;
        }


        if(type[attack.type] === 0){
            damage = ((unitA.attackPwr * 2 / 5 + 3) * (unitA.level * attack.power) /
                      ((unitB.defense /5 + 2)  * unitB.level) * eleAdvantage1 * eleAdvantage2 * matchEleBonus * confBonus + (Math.floor(Math.random()*unitA.level) /2)) / 2 * crit ;
        }else{
            damage = ((unitA.spAttackPwr * 2 / 5 + 3) * (unitA.level * attack.power) /
                      ((unitB.spDefense /5 + 2)  * unitB.level) * eleAdvantage1 * eleAdvantage2 * matchEleBonus * confBonus + (Math.floor(Math.random()*unitA.level) /2)) / 2 * crit ;
        }

    }

    return Math.floor(damage);
}

