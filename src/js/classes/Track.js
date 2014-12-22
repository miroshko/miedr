define(['classes/Pitch'], function(Pitch) {
  function Track() {
    this.id = null;
    this.pitches = [];
    for(var i = 11; i >= 0; i--) {
      this.pitches.push(new Pitch(i));
    }
    this.volume = 100;
    this.mode = 'edit';
    this.getNotesArray = function() {
      var notes = [];
      this.pitches.forEach(function(pitch) {
        notes = notes.concat(pitch.notes);
      });
      return notes;
    };
  }

  return Track;
});