define(['templates', 'vue'], function(templates, Vue) {
  var note = Vue.extend({
    template: templates.note,
    computed: {
      pxRatio: function() {
        return this.$parent.pxRatio;
      }
    },
    methods: {
      clicked: function(e) {
        console.log("clicked on note");
        e.stopPropagation();
      }
    }
  });
  return note;
});