// Get canvas and set context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas width / height
canvas.width = 1270;
canvas.height = 790;

// Duck
class Duck {
  constructor(x, y, dx, dy, duckSize, sprite, spriteRight, spriteLeft) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.duckSize = duckSize;
    this.duckRight = true;
    this.sprite = sprite;
    this.spriteRight = spriteRight;
    this.spriteLeft = spriteLeft;
  }
}

// Sprites
const blueDuckSprite = new Image();
blueDuckSprite.src = "./img/duck1.png";

const greenDuckSprite = new Image();
greenDuckSprite.src = "./img/duck2.png";

let totalNumberOfFrames = 3; // ten images in the image (see the url above)
let imageFrameNumber = 0; // This is changed to make the sprite animate
let widthOfImage = blueDuckSprite.width; // find the width of the image
let heightOfImage = blueDuckSprite.height; // find the height of the image
let widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

const blueDuck = new Duck(
  canvas.width / 5,
  canvas.height - 150,
  1,
  -1,
  90,
  blueDuckSprite,
  "./img/duck1.png",
  "./img/duck1_left.png"
);

const greenDuck = new Duck(
  canvas.width / 1.1,
  canvas.height - 400,
  1,
  -1,
  90,
  greenDuckSprite,
  "./img/duck2.png",
  "./img/duck2_left.png"
);

function animateDuckSprites(ducks) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ducks.forEach((duck) => {
    imageFrameNumber++; // changes the sprite we look at
    imageFrameNumber = imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

    if (duck.sprite !== "") {
      ctx.drawImage(
        duck.sprite,
        imageFrameNumber * widthOfSingleImage,
        0, // x and y - where in the sprite
        widthOfSingleImage,
        heightOfImage, // width and height
        duck.x,
        duck.y, // x and y - where on the screen
        widthOfSingleImage,
        heightOfImage // width and height
      );
      checkCollision(duck);
    }
  });
}

function checkCollision(duck) {
  if (
    duck.x + duck.dx > canvas.width - duck.duckSize ||
    duck.x + duck.dx < 10
  ) {
    duck.dx = -duck.dx;
    duck.duckRight = !duck.duckRight;
    duck.sprite.src = duck.duckRight ? duck.spriteRight : duck.spriteLeft;
  }
  if (
    duck.y + duck.dy > canvas.height - duck.duckSize ||
    duck.y + duck.dy < 25
  ) {
    duck.dy = -duck.dy;
  }

  duck.x += duck.dx;
  duck.y += duck.dy;
}

const ducks = [greenDuck, blueDuck];

function checkForDuckHit(e, ducks) {
  ducks.forEach((duck) => {
    if (
      e.screenX >= duck.x + 50 &&
      e.screenX <= duck.x + 200 &&
      e.screenY >= duck.y + 160 &&
      e.screenY <= duck.y + 220
    ) {
      console.log("HIT");
      duck.sprite = "";
    }
  });
}

canvas.addEventListener("click", (e) => {
  checkForDuckHit(e, ducks);
});

setInterval(animateDuckSprites, 5, ducks);
