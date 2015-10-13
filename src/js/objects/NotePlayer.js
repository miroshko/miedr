define([], function() {
  return function notePlayerFactory(audioContext, destination) {
    var oscillators = {};
    var output = audioContext.createGain();
    output.gain.value=0.5;
    output.connect(destination);

    return {
      play: function(note) {
        if (oscillators[note.pitch]){
          oscillators[note.pitch].stop(0);
        }
        oscillators[note.pitch] = audioContext.createOscillator();
        oscillators[note.pitch].frequency.value = Math.pow(2, (note.pitch - 20 - 49) / 12) * 440;
        oscillators[note.pitch].connect(output);
        oscillators[note.pitch].start(0);
      },
      stop: function(note) {
        oscillators[note.pitch].stop(0);
      }
    };
  };
});