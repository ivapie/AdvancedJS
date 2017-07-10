// Global variables.
var ballX = 150; // Ball x position.
var ballY = 150; // Ball y position.
var ballDX = 2; // Change in ball x position.
var ballDY = 4; // Change in ball y position.
var boardX = 300; // Board width.
var boardY = 300; // Board height.
var paddleX = 150; // Initial paddle location.
var paddleH = 10; // Paddle height.
var paddleD = boardY - paddleH; // Paddle depth.
var paddleW = 150; // Paddle width.
var canvas; // Canvas element.
var ctx; // Canvas context.
var gameLoop; // Game loop time interval.

function drawGame(){
  canvas = document.getElementById("gameBoard");

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    gameLoop = setInterval(drawBall, 16);
    window.addEventListener('keydown', whatKey, true);
  }
}

function drawBall(){
  ctx.clearRect(0,0, boardX, boardY);

  ctx.fillStyle = "thisle";
  ctx.beginPath();
  ctx.rect(0,0, boardX, boardY);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "tomato";
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();



}
