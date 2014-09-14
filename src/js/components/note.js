define(['templates', 'vue'], function(templates, Vue) {
  var note = Vue.extend({
    template: templates.note,
    computed: {
      pxRatio: function() {
        return 0.2;
      }
    }
  });
  return note;
});