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

    function trigger (target, event) {
      var e = document.createEvent('HTMLEvents')
      e.initEvent(event, true, true)
      target.dispatchEvent(e)
    }


    it('has correct name', function(done) {
      var $name = $el.find('.project-name');
      expect($name.text()).toEqual(project.name);
      var new_name = "Sebastian 40";
      project.name = new_name;
      setTimeout(function() {
        expect($name.text()).toEqual(new_name);
        done();
      }, 50);
      
    });

    it('has correct tempo', function(done) {
      $tempo = $el.find('input[name=tempo]');
      expect($tempo.val()).toEqual(project.tempo.toString());
      var new_tempo = 99;
      var new_tempo_2 = 194;
      project.tempo = new_tempo;
      setTimeout(function() {
        expect($tempo.val()).toEqual(new_tempo.toString());
        $tempo.val(new_tempo_2);
        trigger($tempo[0], 'input');
        setTimeout(function() {
          expect($tempo.val()).toEqual(new_tempo_2.toString());
          done();
        }, 50);
      }, 50);
      
    });

    it('allows tempo from 1 to 360', function() {
      $tempo = $el.find('input[name=tempo]');
      trigger($tempo[0], 'input')
    });
  });
});