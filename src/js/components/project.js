define(['vue', 'components/pianoRoll', 'lib/vue-validator', 'templates'], function(Vue, PianoRoll, VueValidator, templates) {
  Vue.use(VueValidator);
  
  return Vue.extend({
    template: templates.project,
    methods: {
      play: function() {
        var project = this.$data;
        var resolution_ms = 100;
        if(this.playing)
          return;

        var notes = project.getNotesArray();

        project.playback_interval = setInterval(function() {
          project.current_position += 1 * resolution_ms * project.tempo / 60;
        }, resolution_ms);
        this.$dispatch('play', project);
        project.playing = true;
      },
      pause: function() {
        clearInterval(this.$data.playback_interval);
        this.$dispatch('stop');
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
      'pitch-roll': PianoRoll
    }
  });
});