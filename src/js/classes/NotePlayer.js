define([], function() {
  NotePlayer.prototype._notes = {
    'F': 'audio/F.mp3',
    'F#': 'audio/Fis.mp3', 
    'G': 'audio/G.mp3' 
  };
  NotePlayer.prototype.playNote = function(note, duration) {
    var file = this._notes[note];
    if (!file) {
      throw new Error("Unknown note");
    }
    var audio = document.createElement('audio');
    audio.setAttribute('src', file);
    audio.play();
    setTimeout(function() {
      audio.pause();
    }, duration);
  };
  function NotePlayer() {
  }
  return NotePlayer;
});