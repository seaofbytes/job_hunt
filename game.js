export default class Duck {
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
