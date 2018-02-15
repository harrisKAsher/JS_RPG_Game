
var keyStatus = {left:false,up:false,right:false,down:false,space:false};
var release = true;

//Event Handler
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(e){
    if(e.keyCode == 37){
        keyStatus.left = true;
    } else if(e.keyCode == 38){
        keyStatus.up = true;
    } else if(e.keyCode == 39){
        keyStatus.right = true;
    } else if(e.keyCode == 40){
        keyStatus.down = true;
    } else if(e.keyCode == 32){
        keyStatus.space = true;

    }
}

function keyUpHandler(e){
    if(e.keyCode == 37){
        keyStatus.left = false;
    } else if(e.keyCode == 38){
        keyStatus.up = false;
    } else if(e.keyCode == 39){
        keyStatus.right = false;
    } else if(e.keyCode == 40){
        keyStatus.down = false;
    } else if(e.keyCode == 32){
        keyStatus.space = false;
    }
}
