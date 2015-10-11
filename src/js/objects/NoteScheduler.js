define([], function() {
  return function noteSchedulerFactory(notePlayer) {
    var scheduledNotes = {};

    var stop = function(entryId) {
      var entry = scheduledNotes[entryId];
      clearTimeout(entry.stopTimeout);
      notePlayer.stop(entry.note);
      delete(scheduledNotes[entryId]);
    };

    return {
      schedule: function(currentTimeframe, tempo, noteOrArray) {
        if (!(noteOrArray instanceof Array)) {
          noteOrArray = [noteOrArray];
        }
        noteOrArray.forEach(function(note) {
          var startTimeframeRelative = (note.start - currentTimeframe) * 60 / tempo;
          var endTimeframeRelative = startTimeframeRelative + note.duration * 60 / tempo;

          if (startTimeframeRelative < 0)
            return;

          var playTimeout = setTimeout(function() {
            notePlayer.play(note);
          }, startTimeframeRelative);

          var stopTimeout = setTimeout(function() {
            stop(playTimeout);
          }, endTimeframeRelative);

          scheduledNotes[playTimeout] = {note: note, stopTimeout: stopTimeout};
        });
      },
      cancelAllScheduled: function() {
        Object.keys(scheduledNotes).forEach(function(id) {
          stop(id);
        });
      }
    };
  };
});