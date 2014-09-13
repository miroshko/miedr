define([], function() {
  function Track() {
    this.id = null;
    this.pitches = new Array(24);
    this.notes = [];
    thus.volume = 100;
  }
  Track.prototype.gridClick = function() {
    console.log("121");
  };
  return Track;
});