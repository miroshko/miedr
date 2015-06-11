/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': '//cdnjs.cloudflare.com/ajax/libs/vue/0.11.4/vue.min',
    'interact': '//cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.4/interact.min',
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
  'components/project',
  'classes/NoteScheduler',
  'classes/AudioPool'
  ], function(Vue, Project, ProjectComponent, NoteScheduler, AudioPool) {
  var audio_pool = new AudioPool();
  var note_scheduler = new NoteScheduler(audio_pool);
  var project = new Project(note_scheduler);

  project.name = "Project name";
  project.tempo = 60;

  window.pR = project;

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: {project: project},
    components: {
      'project': ProjectComponent
    }
  });
});