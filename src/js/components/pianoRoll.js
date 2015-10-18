define(['templates', 'components/pitchRoll', 'interact'], function(templates, pitchRoll, interact) {
  var pianoRoll = pitchRoll.extend({
    template: templates.pianoRoll,
    ready: function() {
      var _this = this;
      interact(this.$el.querySelector('.time-marker')).draggable({
        onmove: function(e) {
          var new_position = _this.$parent.$data.currentPosition + e.dx / _this.px_ratio;
          new_position = Math.max(0, new_position);
          _this.$parent.$data.currentPosition = new_position;
          e.stopPropagation();
        }
      });
    }
  });
  return pianoRoll;
}); 