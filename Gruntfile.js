var grunt = require('grunt');

grunt.initConfig({
    typescript: {
      classes: {
        src: ['src/js/**/*.ts'],
        dest: 'build/js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          basePath: 'src/js',
        }
      }
    },
    copy: {
      base: {
        files: [
          {expand: true, cwd: 'src', src:'audio/*', dest: 'build'},
          {expand: true, cwd: 'src', src:'index.html', dest: 'build'}
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
      ts: {
        files: ['src/js/**/*.ts'],
        tasks: ['typescript'],
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
      },
      templates: {
        files: ['src/templates/**/*.html'],
        tasks: ['tpl'],
        options: {
          spawn: false
        }
      }
    },
    tpl: {
      "build/js/templates.js": ["src/templates/*.html"],
      options: {
        namespace: 'Templates',
        processName: function(name) {
          return name.replace(/^src\/templates\//, '').replace(/\.html$/, '')
        }
      }
    }
});

grunt.loadNpmTasks('grunt-typescript');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-tpl');
grunt.registerTask('default', ['copy', 'sass', 'typescript', 'tpl']);