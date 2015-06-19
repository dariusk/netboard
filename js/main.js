var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render, update: update });

var sprites;
function preload() {
  game.load.image('card', 'img/dogworld.jpg');
}

function create() {
  //  This returns an array of all the image keys in the cache
  var images = game.cache.getKeys(Phaser.Cache.IMAGE);
  sprites = game.add.group()

  //  Now let's create some random sprites and enable them all for drag and 'bring to top'
  for (var i = 0; i < 3; i++) {
    var tempSprite = sprites.create(game.world.randomX/2, game.world.randomY/2, game.rnd.pick(images));
    tempSprite.inputEnabled = true;
    tempSprite.input.enableDrag(false, true);
    tempSprite.width = tempSprite.width / 2.5;
    tempSprite.height = tempSprite.height / 2.5;
    tempSprite.id = i;
    tempSprite.events.onDragStop.add(function() {
      cloak.message('move', {
        group: 'sprites',
        data: _.map(sprites.children, function(sprite) { return _.pick(sprite, 'x', 'y', 'id'); })
      });
    }, tempSprite);
  }
}

function update() {
}

function render() {
  game.debug.inputInfo(32, 32);
  //game.debug.pointer(game.input.mousePointer);
  //game.debug.pointer(game.input.pointer1);

}

function release() {
  console.log('released');
}
