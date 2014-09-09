(function() {
  var note_player = new NotePlayer();
  var table_reader = new TableReader(
    document.getElementById('canvas'),
    note_player
  );
  table_reader.setTempo(document.getElementById('tempo').value);
  table_reader.play();

})();