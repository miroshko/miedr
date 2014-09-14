define(['templates', 'vue', 'interact'], function(templates, Vue, interact) {
  var note = Vue.extend({
    template: templates.note,
    computed: {
      pxRatio: function() {
        return this.$parent.pxRatio;
      }
    },
    methods: {
      onMousedown: function(e) {
        // this.$data.selected = true;
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
    }
  });
  return note;
});