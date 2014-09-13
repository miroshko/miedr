define(['templates', 'vue', 'classes/Note'], function(templates, Vue, Note) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {
      gridClicked: function(e) {
        console.log(this.$data);
        var posX = e.clientX - e.target.offsetLeft;
        var posY = e.clientY - e.target.offsetTop;
        var frame = this.convertPositionToTime(posX);
        var newNote = new Note();
      //  this.$dispatch('add-note', note);
      }
      
    },
    convertPositionToFrame: function(posX) {
        return 12;
      }
  });

  return pitchRoll;
}); 