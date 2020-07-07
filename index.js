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
    this.dead = false;
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

      if (duck.y >= 750) {
        console.log("DUCK DOWN");
        duck.sprite = "";
      }
    }
  });
}

const dogSprite = new Image();
dogSprite.src = "./img/dog.png";

let totalNumberOfFramesD = 7; // ten images in the image (see the url above)
let imageFrameNumberD = 0; // This is changed to make the sprite animate
let widthOfImageD = dogSprite.width + 130; // find the width of the image
let heightOfImageD = dogSprite.height; // find the height of the image
let widthOfSingleImageD = widthOfImageD / totalNumberOfFramesD; // The width of each image in the spirite

function animateDoge() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  imageFrameNumberD++; // changes the sprite we look at
  imageFrameNumberD = imageFrameNumberD % totalNumberOfFramesD; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

  ctx.drawImage(
    dogSprite,
    imageFrameNumberD * widthOfSingleImageD,
    0, // x and y - where in the sprite
    widthOfSingleImageD,
    heightOfImageD, // width and height
    100,
    100, // x and y - where on the screen
    widthOfSingleImageD,
    heightOfImageD // width and height
  );
}

function checkCollision(duck) {
  if (duck.y + duck.dy > canvas.height - 200 && duck.dead) duck.sprite = "";

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
    console.log("DD");
  }

  duck.x += duck.dx;
  duck.y += duck.dy;
}

const ducks = [greenDuck, blueDuck];
let x = new Image();
x.src = "img/duck_falling.png";

function checkForDuckHit(e, ducks) {
  ducks.forEach((duck) => {
    if (
      e.screenX >= duck.x + 50 &&
      e.screenX <= duck.x + 200 &&
      e.screenY >= duck.y + 160 &&
      e.screenY <= duck.y + 220
    ) {
      console.log("HIT");
      duck.dead = true;
      duck.sprite = x;
      duck.dx = 0;
      duck.dy = 0;
      duck.y > 0 ? duck.dy++ : null;
      duck.y < 740 ? "BOTTOM" : console.log(duck.y);
    }
  });
}

canvas.addEventListener("click", (e) => {
  checkForDuckHit(e, ducks);
  console.log(e.screenY);
});

setInterval(animateDuckSprites, 5, ducks);
// setInterval(animateDoge, 300);
