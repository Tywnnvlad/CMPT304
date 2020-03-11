var playSize = 800;
var pieImg = document.getElementById("pieImage");
var pelletDiv = document.getElementById("pelletDiv");

//Pieman class
class pieman_t {
  constructor(x, y, score) {
    this.x = x;
    this.y = y;
    this.score = score;
  }
}

class pellet_t {
  constructor() {
    this.x = Math.floor(Math.random() * (playSize - 50));
    this.y = Math.floor(Math.random() * (playSize - 50));
    // this.style.position = "absolute";
  }
}

function movePacman() {
  document.addEventListener("keydown", e => {
    //UP KEY
    if (e.keyCode == "38") {
      if (pieman.y > 0) {
        pieman.y--;
        pieImg.style.transform = "rotate(270deg)";
        pieImg.style.top = pieman.y + "px";
      }
    }
    //DOWN KEY
    if (e.keyCode == "40") {
      if (pieman.y < playSize - 40) {
        pieman.y++;
        pieImg.style.transform = "rotate(90deg)";
        pieImg.style.top = pieman.y + "px";
      }
    }
    //LEFT KEY
    if (e.keyCode == "37") {
      if (pieman.x > 0) {
        pieman.x--;
        pieImg.style.transform = "rotate(180deg)";
        pieImg.style.left = pieman.x + "px";
      }
    }
    //RIGHT KEY
    if (e.keyCode == "39") {
      if (pieman.x < playSize - 40) pieman.x++;
      pieImg.style.transform = "rotate(360deg)";
      pieImg.style.left = pieman.x + "px";
    }
  });
}
function spawn(n) {
  for (i = 0; i < n; i++) {
    var food = new pellet_t();
    // console.log("x: " + food.x + " y: " + food.y);
    var img = document.createElement("img");
    img.src = "css/pellet.png";
    img.height = "50";
    img.width = "50";
    pelletDiv.appendChild(img);
    img.style.top = food.y + "px";
    img.style.left = food.x + "px";
    img.style.position = "absolute";
    checkCollision(food);
  }
}

function checkCollision(pellet) {
  console.log("X IS: " + pellet.x + "Y IS :" + pellet.y);
  setInterval(() => {
    if (
      Math.abs(pieman.x - pellet.x) <= 25 &&
      Math.abs(pieman.y - pellet.y) <= 25
    ) {
      console.log("REMOVE ME");
    }
  }, 100);
}

function spawnFood(n) {
  for (i = 0; i < n; i++) {
    var x = Math.floor(Math.random() * (playSize - 50));
    var y = Math.floor(Math.random() * (playSize - 50));
    var img = document.createElement("img");
    img.src = "css/pellet.png";
    img.height = "50";
    img.width = "50";
    pelletDiv.appendChild(img);
    img.setAttribute("class", "pelletClass");
    img.setAttribute("id", "pelletImg" + i);
    // var pelletImg = document.getElementById("pelletImg" + i);
    img.style.top = y + "px";
    img.style.left = x + "px";
    //console.log("(x,y): (" + x + "," + y + ")");
    setInterval(() => {
      console.log("x is :" + x);
      if (Math.abs(pieman.x - x) <= 25 && Math.abs(pieman.y - y) <= 25) {
        $(pelletImg).remove();
        pieman.score++;
      }
    }, 500);
  }
}
function removeFood(target) {
  $(target).remove();
}
// function

pieman = new pieman_t(0, 0, 0);
spawn(3);
// spawnTest();
// spawnFood(3);

movePacman();
document.onkeydown = movePacman();
