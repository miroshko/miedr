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
    this.moveNote = function(options) {
      var noteId = options.noteId;
      var targetPitch = options.targetPitch;
      var pitch;
      var index;

      for(var i = 0; i < this.pitches.length; i++) {
        pitch = this.pitches[i];
        for(var ix = 0; ix < pitch.notes.length; ix++) {
          if (pitch.notes[ix].id == noteId) {
            index = ix;
            break;
          }
        }
        if (index) {
          this.pitches[targetPitch].notes.push(pitch.notes[index]);
          pitch.notes = pitch.notes.splice(index, 1);
          break;
        }
      }
    };
  }

  return Track;
});