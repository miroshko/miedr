define(['templates', 'vue', 'classes/Note'], function(templates, Vue, Note) {
  var pitchRoll = Vue.extend({
    template: templates.pitchRoll,
    methods: {
      gridClicked: function(e) {
        console.log(this.$data)
        var posX: Number = e.clientX - e.target.offsetLeft;
        var posY: Number = e.clientY - e.target.offsetTop;
        var frame: Number = this.convertPositionToTime(posX);
        var newNote = new Note();
      //  this.$dispatch('add-note', note);
      }
      
    },
    convertPositionToFrame: function(posX: Number): Number {
        return 12;
      }
  });

  return pitchRoll;
}); 