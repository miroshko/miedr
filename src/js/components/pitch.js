define(['templates', 'vue', 'components/note', 'classes/Note'], function(templates, Vue, note, Note) {
  var pitch = Vue.extend({
    template: templates.pitch,
    created: function() {
      // this.placeNotes();
    },
    methods: {
      clicked: function(e) {
        var posX = e.clientX - e.target.offsetLeft;
        var note = new Note();
        note.duration = 1000;
        note.start = posX / this.pxRatio;
        this.$data.notes.push(note);
      }
    },
    computed: {
      pxRatio: function() {
        return 0.2;
      }
    }
  });
  pitch.component('note', note);
  return pitch;
});