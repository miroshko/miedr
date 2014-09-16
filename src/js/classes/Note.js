define([], function() {
  function Note() {
    this.start = null;
    this.duration = null;
    this.velocity = null;
    this.pitch = null;
    this.selected = false;
  }

  return Note;
});