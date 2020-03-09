var x = 100;
var y = 100;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var imgup = document.getElementById("piemanup");
var imgdown = document.getElementById("piemandown");
var imgleft = document.getElementById("piemanleft");
var imgright = document.getElementById("piemanright");
var interval = 1000;

function spawnPieman() {
  // var c = document.getElementById("myCanvas");
  // var ctx = c.getContext("2d");
  // var img = document.getElementById("pieman");
  ctx.drawImage(imgright, x, y, 24, 24);
  //$("#pieman").hide();
}

function movePie() {
  document.addEventListener("keydown", function(event) {
    if (event.keyCode == "38") {
      //down arrow
      setInterval(function() {
        while (y > 20) {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          ctx.drawImage(imgup, x, y--, 24, 24);
        }
      }, 1000);
    } else if (event.keyCode == "40") {
      // up arrow
      setInterval(function() {
        while (y < 780) {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          ctx.drawImage(imgdown, x, y++, 24, 24);
        }
      }, 1000);
    } else if (event.keyCode == "37") {
      // left arrow
      setInterval(function() {
        while (x > 20) {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          ctx.drawImage(imgleft, x--, y, 24, 24);
        }
      }, 1000);
    } else if (event.keyCode == "39") {
      // right arrow
      setInterval(function() {
        while (x < 780) {
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          ctx.drawImage(imgright, x++, y, 24, 24);
        }
      }, 1000);
    }
  });
}

// function keepMovingUp(i) {
//   while (i < 800) {
//     i++;
//   }
// }
// function keepMovingDown(i) {
//   while (i > 0) {
//     i--;
//   }
// }

spawnPieman();
movePie();
document.onkeydown = movePie();
