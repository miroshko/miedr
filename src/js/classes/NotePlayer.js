define([], function() {
  NotePlayer.prototype._notes = {
    0: 'audio/C.mp3',
    1: 'audio/Cis.mp3', 
    2: 'audio/D.mp3',
    3: 'audio/Dis.mp3',
    4: 'audio/E.mp3',
    5: 'audio/F.mp3',
    6: 'audio/Fis.mp3',
    7: 'audio/G.mp3',
    8: 'audio/Gis.mp3',
    9: 'audio/A.mp3',
    10: 'audio/Ais.mp3',
    11: 'audio/B.mp3'
  };
  NotePlayer.prototype.setNote = function(note) {
    this.note = note;
  };
  NotePlayer.prototype.play = function() {
    var file = this._notes[this.note.pitch];
    if (!file) {
      throw new Error("Unknown note");
    }
    var audio = document.createElement('audio');
    audio.setAttribute('src', file);
    audio.play();
    setTimeout(function() {
      audio.pause();
    }, this.note.duration);
  };
  function NotePlayer() {
  }
  return NotePlayer;
});