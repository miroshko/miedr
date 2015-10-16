define(['keyboardjs'], function(keyboardjs) {
  return function(projectComponent) {
    var proj = projectComponent;

    keyboardjs.on('space', function() {
      if (proj.isPlaying())
        proj.pause();
      else
        proj.play();
    });
  };
});