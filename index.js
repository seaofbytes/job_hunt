// Get canvas and set context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas width / height
canvas.width = 1270;
canvas.height = 790;

let duckSize = 90;

// Load duck PNG
const duck = new Image();
duck.src = "https://i.ya-webdesign.com/images/vector-duck-hunting-2.png";

let x = canvas.width / 4;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;

function drawDuck() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(duck, x, y, duckSize, duckSize);
}

function checkCollision() {
  if (x + dx > canvas.width - duckSize || x + dx < duckSize) {
    dx = -dx;
  }
  if (y + dy > canvas.height - duckSize || y + dy < duckSize) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

function draw() {
  drawDuck();
  checkCollision();
}

setInterval(draw, 10);
