define(['templates',
        'vue',
        'components/note',
        'classes/Note',
        'interact'], function(templates, Vue, note, Note, interact) {
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
          var id = parseInt(e.dragEvent.target.dataset.id);
          _this.$dispatch("moveNote", {id: id, pitch: _this.pitch});
        }
      });
    },
    methods: {
      clicked: function(e) {
        // @todo: add proper position calculation
        var posX = e.clientX - e.target.parentNode.parentNode.parentNode.offsetLeft;
        var note = new Note();
        note.duration = 1000;
        note.start = posX / this.px_ratio;
        this.$data.addNote(note);
      },
      destroyNote: function(note) {
        var index = this.$data.notes.indexOf(note);
        if (index != -1)
          this.$data.notes.splice(index, 1);  
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