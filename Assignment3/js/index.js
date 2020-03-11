var playSize = 800;
var counter = 1;
var pieImg = document.getElementById("pieImage");
var pelletDiv = document.getElementById("pelletDiv");
var scoreDiv = document.getElementById("scoreDiv");

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
  }
  setImg(img) {
    this.img = img;
  }
  remove() {
    this.img.remove();
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
    var img = document.createElement("img");
    img.src = "css/pellet.png";
    img.height = "50";
    img.width = "50";
    pelletDiv.appendChild(img);
    img.style.top = food.y + "px";
    img.style.left = food.x + "px";
    img.style.position = "absolute";
    food.setImg(img);
    checkCollision(food);
  }
}

function checkCollision(pellet) {
  pellet.id = setInterval(() => {
    if (
      Math.abs(pieman.x - pellet.x) <= 25 &&
      Math.abs(pieman.y - pellet.y) <= 25
    ) {
      pellet.remove();
      pieman.score++;
      updateScore();
      clearInterval(pellet.id);
      spawn(counter++);
    }
  }, 100);
}

function updateScore() {
  $("#scoreDiv").html("SCORE : " + pieman.score);
}

pieman = new pieman_t(0, 0, 0);
spawn(10);

movePacman();
document.onkeydown = movePacman();
