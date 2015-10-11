define(['objects/Note', 'objects/Track'], function(Note, Track) {

  describe('track', function() {
    var track;

    beforeEach(function() {
      track = new Track();
    });

    it('gets an empty notes array for an empty track', function() {
      var notes = track.getNotesArray();
      expect(notes).toEqual(jasmine.any(Array));
      expect(notes.length).toEqual(0);
    });

    it('gets an array for a track with notes', function() {
      var note1 = new Note();
      var note2 = new Note();
      track.pitches[0].addNote(note1);
      track.pitches[1].addNote(note2);
      var notes = track.getNotesArray();
      expect(notes.length).toEqual(2);
    });

    it('moves an array of notes', function() {

    });
  });
});