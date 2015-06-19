cloak.configure({
  // You'll add stuff here later.
  messages: {
    confirmMove: function(arg) {
      console.log('server said:', arg);
      _.each(sprites.children, function(sprite) {
        var id = sprite.id;
        var target = _.findWhere(arg.data, { id: id });
        game.add.tween(sprite).to( { x: target.x, y: target.y }, 500, Phaser.Easing.Linear.None, true);
      });
    }
  }
});

cloak.run('http://'+window.location.host+':8090');
