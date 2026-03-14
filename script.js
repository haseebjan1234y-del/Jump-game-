let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");
let scoreText = document.getElementById("score");

let y = 0;
let velocity = 0;
let gravity = -0.8;
let jumping = false;

let obstacleX = 600;
let speed = 6;
let score = 0;

document.addEventListener("keydown", function(e){

  if(e.code === "Space" && !jumping){
    velocity = 14;
    jumping = true;
  }

});

function update(){

  velocity += gravity;
  y += velocity;

  if(y < 0){
    y = 0;
    velocity = 0;
    jumping = false;
  }

  player.style.bottom = (y + 40) + "px";

  obstacleX -= speed;

  if(obstacleX < -40){
    obstacleX = 600;

    score++;
    scoreText.innerText = "Score: " + score;

    speed += 0.3;
  }

  obstacle.style.left = obstacleX + "px";

  let playerLeft = 100;
  let playerRight = 140;
  let obstacleRight = obstacleX + 30;

  if(
    obstacleRight > playerLeft &&
    obstacleX < playerRight &&
    y < 40
  ){
    alert("Game Over! Score: " + score);
    location.reload();
  }

}

setInterval(update,20);