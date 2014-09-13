define(['templates', './pitchRoll'], function(templates, pitchRoll) {
  var pianoRoll = pitchRoll.extend({
    template: templates.pianoRoll
  });
  return pianoRoll;
}); 