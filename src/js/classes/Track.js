define(['classes/Pitch'], function(Pitch) {
  function Track() {
    this.id = null;
    this.pitches = new Array(12);
    for(var i = 0; i < this.pitches.length; i++) {
      this.pitches[i] = new Pitch();
    }
    this.volume = 100;
  }
  Track.prototype.gridClick = function() {
    console.log("121");
  };
  return Track;
});