// Get canvas and set context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas width / height
canvas.width = 1270;
canvas.height = 790;

// Load duck PNG
const duck = new Image();
duck.src = "https://i.ya-webdesign.com/images/vector-duck-hunting-2.png";

//////////////////////////////////////
//    DUCKERINO
/////////////////////////////////////

// http://2.bp.blogspot.com/_syR59EwKQrU/TMgxQigQX-I/AAAAAAAAAAQ/TWOWo2YjneQ/s1600/duckhunt_various_sheet.png
//

var img = new Image();
img.src =
  "https://svn.science.uu.nl/repos/edu.3784827.gt_t6b/Duck%20Hunt%20(Don't%20rebuild!%20Other%20Font!)/Content/Sprites/Duck/Idle.png";

let duckSize = 90;
let x = canvas.width / 2;
let y = canvas.height - 150;
let dx = 2;
let dy = -2;

function animateDuckSprite() {
  let totalNumberOfFrames = 3; // ten images in the image (see the url above)
  let imageFrameNumber = 0; // This is changed to make the sprite animate
  let widthOfImage = img.width; // find the width of the image
  let heightOfImage = img.height; // find the height of the image
  let widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

  setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    imageFrameNumber++; // changes the sprite we look at
    imageFrameNumber = imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

    ctx.drawImage(
      img,
      imageFrameNumber * widthOfSingleImage,
      0, // x and y - where in the sprite
      widthOfSingleImage,
      heightOfImage, // width and height
      x,
      y, // x and y - where on the screen
      widthOfSingleImage,
      heightOfImage // width and height
    );
  }, 200);
}

// function drawDuck() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(duck, x, y, duckSize, duckSize);
// }

function checkCollision() {
  if (x + dx > canvas.width - duckSize || x + dx < 10) {
    dx = -dx;
  }
  if (y + dy > canvas.height - duckSize || y + dy < 25) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

function draw() {
  animateDuckSprite();
  checkCollision();
}

setInterval(draw, 5);

// const duck = {
//   duckSize: 90,
//   x: canvas.width / 2,
//   y: canvas.height - 150,
//   dx: 2,
//   dy: -2,
//   drawDuck() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(duckPNG, this.x, this.y, this.duckSize, this.duckSize);
//   },

//   checkCollision() {
//     if (
//       this.x + this.dx > canvas.width - this.duckSize ||
//       this.x + this.dx < 10
//     ) {
//       this.dx = -this.dx;
//     }
//     if (
//       this.y + this.dy > canvas.height - this.duckSize ||
//       this.y + this.dy < 25
//     ) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//   },

//   draw() {
//     this.drawDuck();
//     this.checkCollision();
//   },
// };

// setInterval(duck.draw(), 5);

// class Duck {
//   constructor(x, y, dx, dy, duckSize, image) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.duckSize = duckSize;
//     this.image = image;
//   }

//   drawDuck() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(this.image, this.x, this.y, this.duckSize, this.duckSize);
//   }

//   checkCollision() {
//     if (
//       this.x + this.dx > canvas.width - this.duckSize ||
//       this.x + this.dx < 10
//     ) {
//       this.dx = -this.dx;
//     }
//     if (
//       this.y + this.dy > canvas.height - this.duckSize ||
//       this.y + this.dy < 25
//     ) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//   }

//   animateDuck() {
//     this.drawDuck();
//     this.checkCollision();
//     console.log("animated");
//   }
// }
