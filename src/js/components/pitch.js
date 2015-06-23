define(['templates',
        'vue',
        'components/note',
        'classes/Note',
        'classes/Pitch',
        'interact'], function(templates, Vue, note, Note, Pitch, interact) {
  var pitch = Vue.extend({
    template: templates.pitch,
    created: function() {
      // this.placeNotes();
      var _this = this;
      this.$on('clickedNote', function(note) {
        if (_this.mode == 'erase') {
          _this.destroyNote(note);
        }

      });
    },
    ready: function() {
      // console.log(this.$el);
      var _this = this;
      interact(this.$el).dropzone({
        ondrop: function(e) {
          console.log("DROP");
          var id = parseInt(e.dragEvent.target.dataset.id);
          var note = Note.getById(id);
          var oldPitch = Pitch.getByPitch(note.pitch);
          oldPitch.removeNote(note);
          _this.$data.addNote(note);
        }
      });
    },
    methods: {
      clicked: function(e) {
        console.log("CLICKED")
        // @todo: add proper position calculation
        var posX = e.clientX - e.target.parentNode.parentNode.parentNode.offsetLeft;
        var note = new Note();
        note.duration = 1000;
        note.start = posX / this.px_ratio;
        this.$data.addNote(note);
      },
      destroyNote: function(note) {
        this.$data.removeNote(note);  
      }
    },
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      mode: function() {
        return this.$parent.$data.mode;
      }
    }
  });
  pitch.component('note', note);
  return pitch;
});