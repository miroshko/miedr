/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js/classes',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': '//cdnjs.cloudflare.com/ajax/libs/vue/0.10.6/vue.min'
  }
});

require(['lodash', 'vue', 'Project'], function(_,  Vue, Project) { 
  var project = new Project.Project();

  project.name = "Project name";
  project.tempo = 60;

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: project,
    methods: {
      ololo: function(e) {
        console.log(e);
      }
    }
  });
})