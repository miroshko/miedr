var grunt = require('grunt');

grunt.initConfig({
    copy: {
      base: {
        files:[
          {expand: true, cwd: 'src', src:'audio/*', dest: 'build'},
          {expand: true, cwd: 'src', src:'index.html', dest: 'build'}
        ]
      },
      js: {
        files: [
          {expand: true, cwd: 'src', src:'js/**/*.js', dest: 'build'}
        ]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['**/*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/css/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'copy:js'],
        options: {
          spawn: false,
        },
      },
      rest: {
        files: ['src/*.html'],
        tasks: ['copy'],
        options: {
          spawn: false
        }
      }
    },
    tpl: {
      "build/js/templates.js": ["src/templates/*.html"],
      options: {
        namespace: 'Templates',
        amd: true,
        processName: function(name) {
          return name.replace(/^src\/templates\//, '').replace(/\.html$/, '')
        }
      }
    },
    jshint: {
      all: ['src/js/**/*.js', '!src/js/lib/**/*.js']
    }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-tpl-amd');
grunt.registerTask('default', ['jshint', 'copy', 'sass', 'tpl']);