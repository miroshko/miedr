define([], function() {
  function Note() {
    this.start = null;
    this.duration = null;
    this.velocity = null;
    this.pitch = null;
    this.selected = false;
    this.id = ++Note._idCounter;
    Note.instances[this.id] = this;
  }

  Note._idCounter = 0;

  Note.instances = {};

  Note.getById = function(id) {
    return Note.instances[id];
  };

  return Note;
});