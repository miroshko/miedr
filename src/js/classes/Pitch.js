define(['classes/Note'], function(Note) {
  var Pitch = function(pitch) {
    this.pitch = pitch;
    this.notes = [];
    this.addNote = function(note) {
      this.notes.push(note);
      note.pitch = this.pitch;
    };
    this.removeNote = function(note) {
      console.log("removing note", note);
      var index = this.notes.indexOf(note);
      if (index > -1) {
        console.log("before", this.notes.length);
        this.notes.splice(index, 1);
        console.log("after", this.notes.length);
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