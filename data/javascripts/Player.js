class Player {
  constructor(x, y, image, speed) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed = speed;
    this.image_number = 1;
  }

  move(key) {
    if (key.up){
      this.y -= this.speed;
    }
    if (key.down) {
      this.y += this.speed;
    }
    if (key.right) {
      this.x += this.speed;
    }
    if (key.left) {
      this.x -= this.speed;
    }

    this.view();
  }

  view() {
    context.drawImage(this.image, this.image_number*28, 0, 28, 28, this.x, this.y, 35, 25);
    if (age % 5 == 0){
      this.image_number++;
    }
    if (this.image_number > 2){
      this.image_number = 0;
    }
  }
}
