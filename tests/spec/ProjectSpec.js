define(['classes/Note', 'classes/Project'], function(Note, Project) {

  describe('project', function() {
    var project;

    beforeEach(function() {
      project = new Project();
    });

    it('gets an empty notes array for an empty project', function() {
      var notes = project.getNotesArray();
      expect(notes).toEqual(jasmine.any(Array));
      expect(notes.length).toEqual(0);
    });

    it('gets an array for a project with notes', function() {
      var note1 = new Note();
      var note2 = new Note();
      project.tracks[0].pitches[0].addNote(note1);
      project.tracks[0].pitches[0].addNote(note2);
      var notes = project.getNotesArray();
      expect(notes.length).toEqual(2);
    })
  });;
});