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

require(['vue', 'classes/Project', 'components/pianoRoll'], function(Vue, Project, pianoRoll) {
  // @todo: move project to project component
  var project = new Project();

  project.name = "Project name";
  project.tempo = 60;

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: project,
    methods: {
      play: function() {
        var _this = this;
        if(this.playing)
          return;
        // @todo@tomorrow naive intervaling. verify position 
        this.$data.playback_interval = setInterval(function() {
          _this.$data.current_position += 10;
        }, 100);
        this.$data.playing = true;
      },
      pause: function() {
        clearInterval(this.$data.playback_interval);
        this.$data.playing = false;
        this.playback_interval = null;
      },
      stop: function() {
        this.pause();
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