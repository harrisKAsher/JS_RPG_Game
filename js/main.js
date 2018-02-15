

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var wait = 100000;

function draw(){ //720, 480    360/360, 240/240, 180/180, 120/120
    ctx.clearRect(0,0,canvas.width,canvas.height);
    battleSelection();
    if(keyStatus.space){
        release = false;
    } else {
        release = true;
    }



}
setInterval(draw, 100);
