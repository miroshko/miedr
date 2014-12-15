/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': '//cdnjs.cloudflare.com/ajax/libs/vue/0.11.4/vue.min',
    'interact': 'lib/interact',
    'templates': 'templates'
  },
  shim: {
    templates: {
      exports: 'Templates'
    }
  }
});

require([
  'vue',
  'classes/Project',
  'components/pianoRoll',
  'components/project',
  'classes/NoteScheduler',
  'classes/AudioPool'
  ], function(Vue, Project, pianoRoll, ProjectComponent, NoteScheduler, AudioPool) {
  var audio_pool = new AudioPool();
  var note_scheduler = new NoteScheduler(audio_pool);
  var project = new Project(note_scheduler);

  project.name = "Project name";
  project.tempo = 60;

  var miedr = new ProjectComponent({
    el: '#the-only-project-so-far',
    data: project,
    components: {
      // @todo: avoid direct assignment of pitch-roll. Use track
      // 'track': trackComponent
      'pitch-roll': pianoRoll
    }
  });
});