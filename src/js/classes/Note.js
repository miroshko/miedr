define([], function() {
  function Note() {
    this.start = null;
    this.duration = null;
    this.velocity = null;
    this.pitch = null;
    this.selected = false;
    this.id = ++Note.prototype._idCounter;
  }

  Note.prototype._idCounter = 0;

  return Note;
});