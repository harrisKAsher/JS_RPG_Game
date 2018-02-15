var select = 0; // 0 = firstChoice, 1 = attackChoice, 2 = itemChoice, 3 = seeTeam, 4 = flee 5 = action happening
var choice = 0;


var userNum = 3;
var opponentNum = 4;













function battleSelection(){
    if(select == 0){
        firstChoice();
    } else if(select == 1){
        attackChoice();
    } else if(select == 5){
        runMove(unit[userNum],unit[opponentNum],choice);

        choice = 0;
    }

    displayEnemyUnit();
    displayYourUnit();

    ctx.beginPath();
    ctx.rect(5,320,350,155);
    ctx.stroke();

    ctx.moveTo(5,395.5)
    ctx.lineTo(355,395.5);
    ctx.stroke();

    ctx.moveTo(177.5,320);
    ctx.lineTo(177.5,475);
    ctx.stroke();


    displayUnitData();
    ctx.closePath();





}

function choiceSelect(){

    ctx.beginPath();
    if(choice == 0){
        ctx.rect(6,321,172,74);
    } else if(choice == 1){
        ctx.rect(178,321,176,74);
    } else if(choice == 2){
        ctx.rect(6,396,172,78);
    } else if(choice == 3){
        ctx.rect(178,396,176,78);
    }
    ctx.fillStyle = "#7abbff";
    ctx.fill();
    ctx.closePath();

    if(keyStatus.left && choice != 0 && choice != 2){
        choice--;
    }
    if(keyStatus.right && choice != 1 && choice != 3){
        choice++;
    }
    if(keyStatus.up && choice != 0 && choice != 1){
        choice -= 2;
    }
    if(keyStatus.down && choice != 2 && choice != 3){
        choice +=2;
    }


}


function firstChoice(){
    choiceSelect();

    ctx.font= "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Attack",55,365);
    ctx.fillText("Items",235,365);
    ctx.fillText("Team",60,445);
    ctx.fillText("Flee",240,445);

    if(keyStatus.space  && release){
        select = choice+1;
        choice = 0;
    }
}



function attackChoice(){
    choiceSelect();
    ctx.font= "24px Arial";
    ctx.fillStyle = "black";
    displayFightText(unit[userNum].attack[0],70,365);
    displayFightText(unit[userNum].attack[1],250,365);
    displayFightText(unit[userNum].attack[2],70,445);
    displayFightText(unit[userNum].attack[3],250,445);

    if(keyStatus.space && release){
        select = 5;
    }

}

function displayFightText(name,startL,vert){
    name += "";
    var location = startL;
    for(i=2; i < name.length || location == 10; i++){
        location -= 5;
    }
    ctx.fillText(name,location,vert);
}








//Graphics
function displayUnitData(){
    ctx.font= "12px Arial";
    ctx.fillStyle = "black";

    ctx.fillText(unit[userNum].name,5,280);
    if(unit[userNum].damage < unit[userNum].hp){
        ctx.fillText(unit[userNum].hp - unit[userNum].damage + " / " + unit[userNum].hp,5,305);
    } else{
        ctx.fillText("0 / " + unit[userNum].hp,5,305);
    }

    ctx.fillText(unit[opponentNum].name,630,150);

    ctx.beginPath();

    var damgPercent = Math.ceil((unit[userNum].damage/unit[userNum].hp) *100);
    if(damgPercent > 100){
        damgPercent = 100;
    }

    ctx.rect(5,290,100 - damgPercent,4);

    if(damgPercent < 50){
        ctx.fillStyle = "green";
    }else if(damgPercent < 75){
        ctx.fillStyle = "yellow";
    }else{
        ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.rect(5,290,100,4);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    var damgPercent = Math.ceil((unit[opponentNum].damage/unit[opponentNum].hp) *100);
    if(damgPercent > 100){
        damgPercent = 100;
    }

    ctx.rect(610,160,100 - damgPercent,4);

    if(damgPercent < 50){
        ctx.fillStyle = "green";
    }else if(damgPercent < 75){
        ctx.fillStyle = "yellow";
    }else{
        ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.rect(610,160,100,4);
    ctx.stroke();
    ctx.closePath();



}

function displayYourUnit(){
    ctx.beginPath();
    ctx.rect(150,150,150,170);
    ctx.fillStyle = "green";
    ctx.fill();

    ctx.closePath();
}


function displayEnemyUnit(){
    ctx.beginPath();
    ctx.rect(600,20,80,100);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}


