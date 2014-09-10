/// <reference path="typings/requirejs/require.d.ts" />

require.config({
  baseUrl: 'js',
  paths: {
    'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
    'vue': '//cdnjs.cloudflare.com/ajax/libs/vue/0.10.6/vue.min'
  }
});

require(['classes/Project', 'lodash', 'vue'], function(Project, _,  Vue) { 
  var miedr = new Vue({
    el: '#the',
    data: {
      tempo: 999
    },
    created: function() {
      console.log(100)
    }
  });
})