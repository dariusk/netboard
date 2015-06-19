window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

  function preload() {
    game.load.image('card', 'img/dogworld.jpg');
  }

  function create() {
    //  This returns an array of all the image keys in the cache
    var images = game.cache.getKeys(Phaser.Cache.IMAGE);
    var test = game.add.group();

    //  Now let's create some random sprites and enable them all for drag and 'bring to top'
    for (var i = 0; i < 3; i++) {
      var tempSprite = test.create(game.world.randomX, game.world.randomY, game.rnd.pick(images));
      tempSprite.inputEnabled = true;
      tempSprite.input.enableDrag(false, true);
      tempSprite.width = tempSprite.width / 2.5;
      tempSprite.height = tempSprite.height / 2.5;
    }
  }

  function render() {
    game.debug.inputInfo(32, 32);
  }
};
