define(['templates', 'vue', 'components/pitch'], function (templates, Vue, pitch) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {

    }
  });

  pitchRoll.component('pitch', pitch);

  return pitchRoll;
}); 