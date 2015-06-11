define(['templates', 'vue', 'components/note', 'classes/Note'], function(templates, Vue, note, Note) {
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
    
    methods: {
      clicked: function(e) {
        if (this.mode == 'erase') {
          console.log("ersers");
          return;
        }
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