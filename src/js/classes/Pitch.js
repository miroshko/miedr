define(['classes/Note'], function(Note) {
  var Pitch = function(pitch) {
    this.pitch = pitch;
    this.notes = [];
    this.addNote = function(note) {
      this.notes.push(note);
      note.pitch = this.pitch;
    };
  };
  return Pitch;
});