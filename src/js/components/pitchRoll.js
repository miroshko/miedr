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
      // @todo: check better practice how to not explicitly refer to parent
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      px_y_ratio: function() {
        return this.$parent.px_y_ratio;
      },
      currentPosition: function() {
        return this.$parent.currentPosition;
      },
      viewportWidth: function() {
      },
      gridLines: function() {
        var sheetLength = 16000;
        var barLength = 1000;
        var barSplit = 4;
        var gridLines = [];
        for(var line = 0; line < sheetLength / barLength * barSplit; line += 1) {
          gridLines.push({
            position: line / barSplit * barLength,
            primary: line % barSplit === 0
          });
        }
        return gridLines;
      }
    }
  });

  pitchRoll.component('pitch', pitch);

  return pitchRoll;
}); 