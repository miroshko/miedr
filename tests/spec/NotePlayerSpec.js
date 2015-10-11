define(['classes/NotePlayer'], function(notePlayerFactory) {
  describe('Note player', function() {
    var audioContext = null;
    var oscillator = null;
    var NotePlayer = null;
    var destination = {};

    beforeEach(function() {
      oscillator = jasmine.createSpyObj('oscillator', ['start', 'stop', 'connect']);
      oscillator.frequency = {value: null};
      audioContext = jasmine.createSpyObj('audioContext', ['createOscillator']);
      audioContext.createOscillator.and.returnValue(oscillator);
      audioContext.destination = destination;
      notePlayer = notePlayerFactory(audioContext);
    });

    it('creates oscillator when play is called', function() {
      notePlayer.play({pitch: 80});
      expect(oscillator.start).toHaveBeenCalled();
    });

    it('connects oscillator to destination', function() {
      notePlayer.play({pitch: 80});
      expect(oscillator.connect).toHaveBeenCalledWith(destination);
    });

    it('creates oscillator with proper frequency', function() {
      notePlayer.play({pitch: 81});
      expect(oscillator.frequency.value).toBe(880);

      notePlayer.play({pitch: 69});
      expect(oscillator.frequency.value).toBe(440);
    });

    it('stops same note oscillator when play is called', function() {
      notePlayer.play({pitch: 93});
      notePlayer.play({pitch: 93});
      expect(oscillator.stop).toHaveBeenCalled();
      expect(oscillator.start.calls.count()).toEqual(2);
    });

    it('stops oscillator when stop is called', function() {
      notePlayer.play({pitch: 80});
      notePlayer.stop({pitch: 80});      
      expect(oscillator.stop).toHaveBeenCalled();
    });
  });
});