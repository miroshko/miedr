define(['classes/NotePlayer'], function(NotePlayer) {
  function AudioPool(count) {
    count = count ? count : 12;
    this.audio_instances = [];

    for(var i = 0; i < count; i++) {
      // this.audio_instances.push(document.createElement('audio'));
    }

    this.grabInstance = function() {
      // @todo: make real pool since number of audios on a page seems to be limited
      return new NotePlayer();
    };
  }

  return AudioPool;
});