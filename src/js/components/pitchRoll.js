define(['templates', 'vue', 'components/pitch'], function (templates, Vue, pitch) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {
    },
    created: function() {
      this.$on('moveNote', function(move) {
        this.$data.moveNote({noteId: move.id, targetPitch: move.pitch});
      });
    },
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      px_y_ratio: function() {
        return this.$parent.px_y_ratio;
      },
      current_position: function() {
        return this.$parent.current_position;
      }
    }
  });

  pitchRoll.component('pitch', pitch);

  return pitchRoll;
}); 