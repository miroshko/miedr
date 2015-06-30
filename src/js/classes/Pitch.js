define(['classes/Note'], function(Note) {
  var Pitch = function(pitch) {
    this.pitch = pitch;
    this.notes = [];
    this.addNote = function(note) {
      this.notes.push(note);
      note.pitch = this.pitch;
    };
    this.removeNote = function(note) {
      var index = this.notes.indexOf(note);
      if (index > -1) {
        this.notes.splice(index, 1);
      }
    };
    this.getNotesArray = function() {
      return this.notes;
    };

    Pitch.instances[this.pitch] = this;
  };

  Pitch.instances = {};

  Pitch.getByPitch = function(pitch) {
    return Pitch.instances[pitch];
  };

  return Pitch;
});