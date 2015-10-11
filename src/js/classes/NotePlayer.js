define([], function() {
  return function notePlayerFactory(audioContext) {
    var oscillators = {};

    return {
      play: function(note) {
        if (oscillators[note.pitch]){
          oscillators[note.pitch].stop(0);
        }
        oscillators[note.pitch] = audioContext.createOscillator();
        oscillators[note.pitch].frequency.value = Math.pow(2, (note.pitch - 20 - 49) / 12) * 440;
        oscillators[note.pitch].connect(audioContext.destination);
        oscillators[note.pitch].start(0);
      },
      stop: function(note) {
        oscillators[note.pitch].stop(0);
      }
    };
  };
});