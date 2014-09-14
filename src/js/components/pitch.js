define(['templates', 'vue', 'components/note'], function(templates, Vue, note) {
  var pitch = Vue.extend({
    template: templates.pitch,
    created: function() {
      // this.placeNotes();
    },
    methods: {
      placeNotes: function() {
        // this.notes.
      }
    }
  });
  pitch.component('note', note);
  return pitch;
});