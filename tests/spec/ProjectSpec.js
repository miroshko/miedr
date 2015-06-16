define(['../../build/js/classes/Project'], function(Project) {

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
  });
});