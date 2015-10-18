define(['templates', 'vue', 'interact'], function(templates, Vue, interact) {
  var note = Vue.extend({
    replace: true,
    template: templates.note,
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      px_y_ratio: function() {
        return this.$parent.px_y_ratio;
      }
    },
    methods: {
      onMousedown: function(e) {
        this.$dispatch('clickedNote', this.$data, e);
      },
      onClick: function(e) {
        // this.$data.selected = !this.$data.selected;
        e.stopPropagation();
      }
    },
    ready: function () {
      var _this = this;
      interact(this.$el).draggable({
        onmove: function(e) {
          if (!_this.$data.tempStart)
            _this.$data.tempStart = _this.$data.start;

          var new_pos = _this.$data.tempStart + e.dx / _this.px_ratio;
          new_pos = Math.max(0, new_pos);
          _this.$data.tempStart = new_pos;
          _this.$data.start = _this.$parent.getGridAlignedPos(new_pos);
        }
      });
      interact(this.$el.querySelector('.resize-marker-end')).draggable({
        onmove: function(e) {
          var new_duration = _this.$data.duration + e.dx / _this.px_ratio;
          new_duration = Math.max(0, new_duration);
          _this.$data.duration = new_duration;
          e.stopPropagation();
        }
      });
      interact(this.$el.querySelector('.resize-marker-begin')).draggable({
        onmove: function(e) {
          var new_duration = _this.$data.duration - e.dx / _this.px_ratio;
          new_duration = Math.max(0, new_duration);
          var new_pos = _this.$data.start + e.dx / _this.px_ratio;
          new_pos = Math.max(0, new_pos);
          _this.$data.duration = new_duration;
          _this.$data.start = new_pos;
          e.stopPropagation();
        }
      });
    }
  });
  return note;
});