define(['classes/Track'], function(Track) {

  function Project(note_scheduler) {
    this.name = "";
    this.tempo = 120;
    this.tracks = [];
    this.tracks.push(new Track());
    this.current_position = 1000;
    this.playback_interval = null; // should be here?
    this.note_scheduler = note_scheduler;
    this.getNotesArray = function() {
      var notes = [];
      this.tracks.forEach(function(track) {
        notes = notes.concat(track.getNotesArray());
      });
      return notes;
    };
  }

  return Project;
});