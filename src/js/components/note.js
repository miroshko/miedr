define(['templates', 'vue', 'interact'], function(templates, Vue, interact) {
  var note = Vue.extend({
    replace: true,
    template: templates.note,
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
    },
    methods: {
      onMousedown: function(e) {
        this.$dispatch('clickedNote', this.$data);
      },
      onClick: function(e) {
        e.stopPropagation();
      }
    },
    ready: function () {
      var _this = this;
      interact(this.$el).draggable({
        onend: function(e) {
          console.log("MOVE END");
          var new_pos = _this.$data.start + e.dx / _this.px_ratio;
          new_pos = Math.max(0, new_pos);
          _this.$data.start = new_pos;
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