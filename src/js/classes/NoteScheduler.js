define([], function() {
  function NoteScheduler(audio_pool) {
    if (!audio_pool) {
      throw new Error("audio_pool must be passed");
    }
    this.audio_pool = audio_pool;
    this.schedule = function(current_timeframe, note_or_array) {
      if (!(note_or_array instanceof Array)) {
        note_or_array = [note_or_array];
      }

      note_or_array.forEach(function(note) {
        var start_timeframe = note.start - current_timeframe;
        console.log("scheduled to play " + note.pitch + " in " + start_timeframe);
        if (start_timeframe < 0)
          return;
        var end_timeframe = start_timeframe + note.duration;
        var note_player = this.audio_pool.grabInstance();
        note_player.setNote(note);

        setTimeout(function() {
          note_player.play();
        }, start_timeframe);
      }, this);
    };
    this.cancelAllScheduled = function() {

    };
  }

  return NoteScheduler;
});