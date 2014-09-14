define(['classes/Note'], function(Note) {
  var Pitch = function() {
    this.notes = [];
    // @todo: remove then
    var note = new Note();
    note.start = 1000;
    note.duration = 2000;
    note.velocity = 100;
    this.notes.push(note);
  };
  return Pitch;
});