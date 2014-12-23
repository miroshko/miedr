define([
  'jquery',
  'vue',
  'classes/Project',
  'components/project',
  'classes/NoteScheduler',
  'classes/AudioPool',
  'jquery'
], function(jquery, Vue, Project, ProjectComponent, NoteScheduler, AudioPool, jquery) {
  describe("Project", function() {
    var el_id = "proj-no-1";
    var $el = null;
    var project_vue = null;
    var project = null;

    beforeEach(function() {
      $el = $('<div id="' + el_id + '"><div v-component="project" v-with="project"></div></div>');
      $el.appendTo(document.body);

      var audio_pool = new AudioPool();
      var note_scheduler = new NoteScheduler(audio_pool);
      project = new Project(note_scheduler);

      project.name = "Project name";
      project.tempo = 60;

      project_vue = new Vue({
        el: '#' + el_id,
        data: {project: project},
        components: {
          'project': ProjectComponent
        }
      });
    });

    afterEach(function() {
      project_vue.$delete();
      $('#' + el_id).remove();
    });

    it('has a name', function() {
      expect($el.find('.project-name').text()).toEqual(project.name);
    });
  });
});