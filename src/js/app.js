/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/0.11.4/vue.min',
    'interact': 'https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.4/interact.min',
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
  'objects/Project',
  'components/project',
  'objects/NoteScheduler',
  'objects/NotePlayer',
  ], function(Vue, projectFactory, ProjectComponent, noteSchedulerFactory, notePlayerFactory) {
  var audioContext = new AudioContext();
  var notePlayer = notePlayerFactory(audioContext);
  var noteScheduler = noteSchedulerFactory(notePlayer);
  var project = projectFactory();

  project.name = "Project name";
  project.tempo = 60;

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: {project: project},
    components: {project: ProjectComponent}
  });

  miedr.$on('play', function(project) {
    noteScheduler.schedule(project.current_position,
                           project.tempo,
                           project.getNotesArray());
  });

  miedr.$on('stop', function() {
    noteScheduler.cancelAllScheduled();
  });
});