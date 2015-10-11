define(['objects/NoteScheduler'], function(noteSchedulerFactory) {
  describe('Note scheduler', function() {
    var noteScheduler = null;
    var notePlayer = null;

    beforeEach(function() {
      notePlayer = jasmine.createSpyObj('player', ['play', 'stop'])
      noteScheduler = noteSchedulerFactory(notePlayer);
    });

    it('calls play and stop at the right time', function() {
      jasmine.clock().install();
      noteScheduler.schedule(1000, 120, {start:1500, duration:1000, pitch: 80});
      jasmine.clock().tick(500 * 60 / 120);
      expect(notePlayer.play).toHaveBeenCalled();
      
      jasmine.clock().tick(999 * 60 / 120);
      expect(notePlayer.stop).not.toHaveBeenCalled();
      jasmine.clock().tick(1 * 60 / 120);
      expect(notePlayer.stop).toHaveBeenCalled();
      jasmine.clock().uninstall();
    });

    it('calls play and stop for an array of notes', function() {
      jasmine.clock().install();
      noteScheduler.schedule(1000, 120, [
        {start:1500, duration:50, pitch: 80},
        {start:1600, duration:400, pitch: 83},
        {start:1700, duration:300, pitch: 85}
      ]);
      jasmine.clock().tick(800 * 60 / 120);
      expect(notePlayer.play.calls.count()).toBe(3)
      expect(notePlayer.stop.calls.count()).toBe(1)
      jasmine.clock().uninstall();
    });

    it('cancels all scheduled notes', function() {
      jasmine.clock().install();
      noteScheduler.schedule(1000, 60, [
        {start:1500, duration:50, pitch: 80},
        {start:1600, duration:400, pitch: 83},
        {start:1700, duration:300, pitch: 85}
      ]);
      jasmine.clock().tick(800);
      expect(notePlayer.stop.calls.count()).toBe(1);
      noteScheduler.cancelAllScheduled();
      expect(notePlayer.stop.calls.count()).toBe(3);
      
      notePlayer.stop.calls.reset();
      jasmine.clock().tick(1000);
      expect(notePlayer.stop).not.toHaveBeenCalled();

      jasmine.clock().uninstall();
    });
  });
});