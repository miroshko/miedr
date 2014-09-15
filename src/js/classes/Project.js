define(['classes/Track'], function(Track) {

  function Project() {
    this.name = "";
    this.tempo = 120;
    this.tracks = [];
    this.tracks.push(new Track());
    this.current_position = 1000;
    this.playback_interval = null; // should be here?
  }
  return Project;
});