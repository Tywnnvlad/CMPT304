var x =5;
var y =5;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("pieman");

function spawnPieman(){
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // var img = document.getElementById("pieman");
    ctx.drawImage(img,x,y,24,24);
    //$("#pieman").hide();
}

function movePie(){
    document.addEventListener('keydown',function(event){

     if (event.keyCode == '38') {
        // up arrow
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ctx.drawImage(img,x,y--,24,24);

    }
    else if (event.keyCode == '40') {
        // down arrow
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ctx.drawImage(img,x,y++,24,24);

    }
    else if (event.keyCode == '37') {
       // left arrow
       ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
       ctx.drawImage(img,x--,y,24,24);

    }
    else if (event.keyCode == '39') {
       // right arrow
       ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
       ctx.drawImage(img,x++,y,24,24);
        }

    });

    
}

spawnPieman();
movePie();
document.onkeydown = movePie();

