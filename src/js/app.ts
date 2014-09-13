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

  var pitchRoll = Vue.extend({
    template: '<ul class="pitch-roll-legend">' +
        '<li class="key key-{{ $index % 12 }}" data-pitch="{{$index}}" v-repeat="pitches">' +
        '</li>' +
      '</ul>' +
      '<ul class="pitch-roll-grid">' +
        '<li v-repeat="pitches" class="pitch pitch-{{ $index % 12 }}" v-on="click: $value">' +
          '{{ $value }}' +
        '</li>' +
      '</ul>',
    created: function() {
      console.log(this.$data)
      this.$el.querySelector('.pitch-roll-legend').classList.add('piano-roll')
      this.$el.querySelector('.pitch-roll-grid').classList.add('piano-grid')
    }
  });
  Vue.component('pitch-roll', pitchRoll);

  var miedr = new Vue({
    el: '#the-only-project-so-far',
    data: project,
    methods: {
      gridClick: function(e) {
        var posX: Number = e.clientX - e.target.offsetLeft;
        var posY: Number = e.clientY - e.target.offsetTop;
      }
    }
  });
})