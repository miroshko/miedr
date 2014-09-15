define(['templates', 'vue', 'interact'], function(templates, Vue, interact) {
  var note = Vue.extend({
    template: templates.note,
    computed: {
      pxRatio: function() {
        return this.$parent.pxRatio;
      },
      mode: function() {
        return this.$parent.mode;
      }
    },
    methods: {
      onMousedown: function(e) {
        if (this.mode == 'erase') {
          this.$dispatch('destroyNote', this.$data);
          e.stopPropagation();
          return;
        }
        this.$data.selected = true;
      },
      onClick: function(e) {
        e.stopPropagation();
      }
    },
    created: function () {
      console.log("adding draggable");
      var _this = this;
      interact(this.$el).draggable({
        onmove: function(e) {
          var new_pos = _this.$data.start + e.dx / _this.pxRatio;
          new_pos = Math.max(0, new_pos);
          _this.$data.start = new_pos;
        }
      });
      interact(this.$el.querySelector('.resize-marker-end')).draggable({
        onmove: function(e) {
          var new_duration = _this.$data.duration + e.dx / _this.pxRatio;
          new_duration = Math.max(0, new_duration);
          _this.$data.duration = new_duration;
          e.stopPropagation();
        }
      });
      interact(this.$el.querySelector('.resize-marker-begin')).draggable({
        onmove: function(e) {
          var new_duration = _this.$data.duration - e.dx / _this.pxRatio;
          new_duration = Math.max(0, new_duration);
          var new_pos = _this.$data.start + e.dx / _this.pxRatio;
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