define(['templates',
        'vue',
        'components/note',
        'objects/Note',
        'objects/Pitch',
        'interact'], function(templates, Vue, note, Note, Pitch, interact) {
  var pitch = Vue.extend({
    template: templates.pitch,
    created: function() {
      // this.placeNotes();
      var _this = this;
      this.$on('clickedNote', function(note, e) {
        if (_this.mode == 'erase') {
          _this.destroyNote(note);
        } else {
          //              Ctrl       wo Ctrl
          // >1 Selctd    deselect   select, deselect others
          // Selctd       deselect   deselect, deselect others
          // Not selctd   select     select, deselect others


          if (!e.ctrlKey) {
            Note.getSelected().forEach(function(currNote) {
              if (currNote.id != note.id) {
                currNote.selected = !currNote.selected;
              }
            });
          }
          note.selected = !note.selected;
        }
      });
    },
    ready: function() {
      var _this = this;
      interact(this.$el).dropzone({
        ondragenter: function(e) {
          if (!e.dragEvent.target.classList.contains('note'))
            return;

          var id = parseInt(e.dragEvent.target.dataset.id);
          var note = Note.getById(id);
          note.visualVerticalPitchOffset = note.pitch - _this.$data.pitch;
        },
        ondrop: function(e) {
          if (!e.dragEvent.target.classList.contains('note'))
            return;

          var id = parseInt(e.dragEvent.target.dataset.id);
          var note = Note.getById(id);
          var oldPitch = Pitch.getByPitch(note.pitch);
          oldPitch.removeNote(note);
          _this.$data.addNote(note);
          note.visualVerticalPitchOffset = 0;
        }
      });
    },
    methods: {
      clicked: function(e) {
        if (this.mode == 'edit') {
          // @todo: add proper position calculation
          var posX = e.clientX - e.target.parentNode.parentNode.parentNode.offsetLeft;
          var note = new Note();
          note.duration = 1000;
          note.start = posX / this.px_ratio;
          this.$data.addNote(note);
        } 
      },
      destroyNote: function(note) {
        this.$data.removeNote(note);  
      }
    },
    computed: {
      px_ratio: function() {
        return this.$parent.px_ratio;
      },
      px_y_ratio: function() {
        return this.$el.offsetHeight;
      },
      mode: function() {
        return this.$parent.$data.mode;
      }
    }
  });
  pitch.component('note', note);
  return pitch;
});