var $window;
var $canvas;
var context;
var loop;
var age = 0;
var image = [new Image(), new Image()];
image[0].src = "data/images/tori.png";
image[1].src = "data/images/enemy.png";

$(function () {
  $window = $(window);
  $canvas = $("#canvas");
  context = $canvas[0].getContext("2d");
  const key = {
    up: false,
    down: false,
    right: false,
    left: false,
  }
  var keyEvent = new KeyEvent();
  var player = new Player(200, 500, image[0], 5);
  var enemys = [];
  var enemy_count = 1;

  enemys.push(new Enemy(Math.ceil(Math.random() * 300) + 50, -10, image[1], Math.ceil(Math.random() * 10)))
  loop = setInterval(function () {
    age++;
    context.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
    $canvas.css("background-position-y", "+=1");

    keyEvent.key(key);
    player.move(key);

    for (var i = 0; i < enemys.length; i++) {
      var result = enemys[i].move(player);
      if (!result){
        enemys.splice(i, 1);
      }
    }
    if (age % 50 == 0) {
      for (var i = 0; i < enemy_count; i++){
        enemys.push(new Enemy(Math.ceil(Math.random() * 300) + 50, -10, image[1], Math.ceil(Math.random() * 10)))
      }
    }
    if (age % 500 == 0){
      enemy_count++;
    }
  }, 1000/30);
})
