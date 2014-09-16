/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': 'https://raw.githubusercontent.com/yyx990803/vue/v0.10.6/dist/vue',
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
  'classes/NoteScheduler',
  'classes/AudioPool'
  ], function(Vue, Project, pianoRoll, NoteScheduler, AudioPool) {
  var audio_pool = new AudioPool();
  var note_scheduler = new NoteScheduler(audio_pool);
  var project = new Project(note_scheduler);

  project.name = "Project name";
  project.tempo = 60;

  // @todo: move project to project component
  var miedr = new Vue({
    el: '#the-only-project-so-far',
    // is it OK to make the whole project object to the data property?
    data: project,
    methods: {
      play: function() {
        var project = this.$data;
        var resolution_ms = 100;
        if(this.playing)
          return;

        console.log("Getting all project notes");
        var notes = project.getNotesArray();
        console.log("Will not schedule the following notes: " , notes);
        project.note_scheduler.schedule(this.$data.current_position, notes);

        project.playback_interval = setInterval(function() {
          project.current_position += 1 * resolution_ms;
        }, resolution_ms);
        this.$dispatch('schedule_notes', this.$data);
        project.playing = true;
      },
      pause: function() {
        clearInterval(this.$data.playback_interval);
        project.note_scheduler.cancelAllScheduled();
        this.$data.playing = false;
        this.playback_interval = null;
      },
      stop: function() {
        this.pause();
        project.note_scheduler.cancelAllScheduled();
        this.$data.current_position = 0;
      }
    },
    computed: {
      px_ratio: function() {
        return 0.2;
      }
    },
    components: {
      // @todo: avoid direct assignment of pitch-roll. Use track
      // 'track': trackComponent
      'pitch-roll': pianoRoll
    }
  });
});