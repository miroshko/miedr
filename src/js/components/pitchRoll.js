define(['templates', 'vue', 'components/pitch'], function (templates, Vue, pitch) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {
      gridClicked: function(e) {
        // console.log(this.$data);
        // var posX = e.clientX - e.target.offsetLeft;
        // var posY = e.clientY - e.target.offsetTop;
        // var frame = convertPositionToTime(posX);
        // var newNote = new Note();
        // newNote.pitch = parseInt(e.target.dataset.pitch);
        // newNote.start = frame;
        // newNote.velocity = 100;
        // newNote.duration = 50;
        // this.$data.notes.push(newNote);
      //  this.$dispatch('add-note', note);
      },
      clicked: function() {

      }
    }
  });

  pitchRoll.component('pitch', pitch);

  return pitchRoll;
}); 