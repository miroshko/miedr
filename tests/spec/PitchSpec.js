define(['classes/Note', 'classes/Pitch'], function(Note, Pitch) {

  describe('pitch', function() {
    var pitch;

    beforeEach(function() {
      pitch = new Pitch(5);
    });

    it('adds a note', function() {
      var note1 = new Note();
      var note2 = new Note();
      pitch.addNote(note1);
      pitch.addNote(note2);
      var notes = pitch.getNotesArray();
      expect(notes.length).toEqual(2);
    });

    it('alters note pitch when it\'s added', function() {
      var note = new Note();
      note.pitch = 20;
      pitch.addNote(note);
      expect(note.pitch).toEqual(5);
    });
  });;
});