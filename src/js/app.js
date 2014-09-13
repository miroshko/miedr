/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': '//cdnjs.cloudflare.com/ajax/libs/vue/0.10.6/vue.min',
    'templates': 'templates'
  },
  shim: {
    templates: {
      exports: 'Templates'
    }
  }
});

require(['vue', 'classes/Project', 'components/pianoRoll'], function(Vue, Project, pianoRoll) {
  var project = new Project.Project();

  project.name = "Project name";
  project.tempo = 60;

  Vue.component('pitch-roll', pianoRoll);

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: project,
    methods: {
      gridClick: function(e) {
        var posX = e.clientX - e.target.offsetLeft;
        var posY = e.clientY - e.target.offsetTop;
      }
    }
  });
});