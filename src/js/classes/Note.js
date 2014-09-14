define([], function() {
  function Note() {
    this.start = null;
    this.duration = null;
    this.velocity = null;
    this.selected = false;
  }

  return Note;
});