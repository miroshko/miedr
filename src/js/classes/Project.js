define(['classes/Track'], function(Track) {

  function Project() {
    this.name = "";
    this.tempo = 120;
    this.tracks = [];
    this.tracks.push(new Track());
  }
  return Project;
});