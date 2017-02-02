class KeyEvent {

  key(key) {
    $window.keydown(function (event) {
      switch (event.keyCode) {
        case 37:
          key.left = true;
        break;

        case 38:
          key.up = true;
        break;

        case 39:
          key.right = true;
        break;

        case 40:
          key.down = true;
        break;
      }
    })

    $window.keyup(function (event) {
      switch (event.keyCode) {
        case 37:
          key.left = false;
        break;

        case 38:
          key.up = false;
        break;

        case 39:
          key.right = false;
        break;

        case 40:
          key.down = false;
        break;
      }
    })
  }
}
