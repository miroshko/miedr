define(['templates', 'vue', 'components/note', 'classes/Note'], function(templates, Vue, note, Note) {
  var pitch = Vue.extend({
    template: templates.pitch,
    created: function() {
      // this.placeNotes();
      this.destroyNote = this.destroyNote.bind(this);
      this.$on('destroyNote', this.destroyNote);
    },
    
    methods: {
      clicked: function(e) {
        if (this.mode == 'erase')
          return;
        // @todo: add proper position calculation
        var posX = e.clientX - e.target.parentNode.parentNode.offsetLeft;
        var note = new Note();
        note.duration = 1000;
        note.start = posX / this.px_ratio;
        this.$data.notes.push(note);
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