define(['templates', 'vue', 'components/pitch'], function (templates, Vue, pitch) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {
    },
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      current_position: function() {
        return this.$parent.current_position;
      }
    }
  });

  pitchRoll.component('pitch', pitch);

  return pitchRoll;
}); 