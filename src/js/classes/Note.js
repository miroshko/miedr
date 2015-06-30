define([], function() {
  function Note() {
    this.start = null;
    this.duration = null;
    this.velocity = null;
    this.pitch = null;
    this.selected = false;
    this.id = ++Note._idCounter;
    this.visualVerticalPitchOffset = 0;
    this.selected = false;

    Note.instances[this.id] = this;
  }

  Note._idCounter = 0;

  Note.instances = {};

  Note.getById = function(id) {
    return Note.instances[id];
  };

  Note.getSelected = function() {
    var note, notes = [];
    for(var i in Note.instances) {
      note = Note.instances[i];
      if (note.selected) {
        notes.push(note);
      }
    }
    return notes;
  };

  return Note;
});