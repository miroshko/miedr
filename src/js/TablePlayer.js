var TableReader = (function() {
  TablePlayer.prototype.play = function() {
    var _this = this;
    setInterval(function() {
      _this.playFrame();
      _this._current_frame = (_this._current_frame + 1) % _this._frame_count;
    }, this._frame_length);
  }

  TablePlayer.prototype.setTempo = function(tempo) {
    this.tempo = tempo
    this._frame_length = 60 * 1000 / 120;
  }

  TablePlayer.prototype.playFrame = function() {
    var prev = this.elem.children[(this._current_frame + this._frame_count - 1) % this._frame_count]; 
    prev.classList.remove('current');
    var current = this.elem.children[this._current_frame],
        td;
    current.classList.add('current');
    for (var i = 0; i < current.children.length; i++) {
      td = current.children[i];
      if (!td.classList.contains('note') || !td.dataset.note)
        continue;
      this.note_player.playNote(td.dataset.note, this._frame_length);
    }
  }

  function TablePlayer(element, note_player) {
    this.elem = element.children[0];
    this.note_player = note_player;
    this.tempo = null;
    this._current_frame = 0;
    this._frame_count = this.elem.children.length;

  }
  return TablePlayer;
})();