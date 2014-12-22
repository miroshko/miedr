define(['vue', 'components/pianoRoll', 'templates'], function(Vue, PianoRoll, templates) {
  return Vue.extend({
    template: templates.project,
    methods: {
      play: function() {
        var project = this.$data;
        var resolution_ms = 100;
        if(this.playing)
          return;

        var notes = project.getNotesArray();
        project.note_scheduler.schedule(project.current_position, project.tempo, notes);

        project.playback_interval = setInterval(function() {
          project.current_position += 1 * resolution_ms * project.tempo / 60;
        }, resolution_ms);
        this.$dispatch('schedule_notes', this.$data);
        project.playing = true;
      },
      pause: function() {
        clearInterval(this.$data.playback_interval);
        this.$data.note_scheduler.cancelAllScheduled();
        this.$data.playing = false;
        this.playback_interval = null;
      },
      stop: function() {
        this.pause();
        this.$data.note_scheduler.cancelAllScheduled();
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