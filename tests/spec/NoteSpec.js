define(['classes/Note'], function(Note) {

  describe('note', function() {
    var note;

    beforeEach(function() {
      note = new Note();
    });

    it('auto increments note id', function() {
      var note1 = new Note();
      var note2 = new Note();
      expect(note1.id).toBeDefined();
      expect(note2.id).toBeDefined();
      expect(note1.id).not.toEqual(note2.id);
    });

    it('gets note by id', function() {
      var note1 = new Note();
      var retrievedNote = Note.getById(note1.id);
      expect(retrievedNote).toBe(note1);
    });
  });;
});