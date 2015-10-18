define(['keyboardjs'], function(keyboardjs) {
  return function(projectComponent) {
    var proj = projectComponent;

    keyboardjs.on('space', function(e) {
      if (proj.isPlaying())
        proj.pause();
      else
        proj.play();

      e.preventDefault();
    });

    keyboardjs.on('home', function(e) {
      if (!proj.isPlaying())
        proj.$data.current_position = 0;

      e.preventDefault();
    });
  };
});