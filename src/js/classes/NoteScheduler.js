define([], function() {
  return function noteSchedulerFactory(notePlayer) {
    var scheduledNotes = [];

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
            notePlayer.stop(note);
          }, endTimeframeRelative);

          scheduledNotes.push(playTimeout);
          scheduledNotes.push(stopTimeout);
        });
      },
      cancelAllScheduled: function() {
        scheduledNotes.forEach(function(timeout) {
          clearTimeout(timeout);
        });
      }
    };
  };
});