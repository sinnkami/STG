class Enemy {
  constructor(x, y, image, speed) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.speed = speed;
    this.image_number = 1;
  }

  move(player) {
    this.y += this.speed;
    this.view();

    if (this.y > 600){
      return false;
    }
    if (this.isHit(player)) {
      clearInterval(loop);
      context.font = "50px normal"
      context.fillText("GAME OVER", 90, 200);
    }

    return true;
  }

  isHit(player) {
    if ((player.x < this.x && player.x + 35 > this.x) || (player.x < this.x + 35 && player.x + 35 > this.x + 35)) {
      if ((player.y < this.y && player.y + 24 > this.y) || (player.y < this.y + 24 && player.y + 24 > this.y + 24)) {
        return true;
      }
    }
    return false;
  }

  view() {
    context.drawImage(this.image, this.image_number*24, 0, 24, 24, this.x, this.y, 35, 24);
    if (age % 10 == 0){
      this.image_number++;
    }
    if (this.image_number > 2){
      this.image_number = 0;
    }
  }
}
