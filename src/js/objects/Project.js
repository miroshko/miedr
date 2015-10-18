define(['objects/Track'], function(Track) {
  return function projectFactory() {
    return {
      name: "",
      tempo: 120,
      tracks: [new Track()],
      currentPosition: 0,
      playback_interval: null, // should be here?
      getNotesArray: function() {
        var notes = [];
        this.tracks.forEach(function(track) {
          notes = notes.concat(track.getNotesArray());
        });
        return notes;
      }
    };
  };
});