var grunt = require('grunt');

grunt.initConfig({
    typescript: {
      classes: {
        src: ['src/js/classes/**/*.ts'],
        dest: 'build/js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          basePath: 'src/js',
        }
      },
      app: {
        src: 'src/js/app.ts',
        dest: 'build/js/',
        options: {
          basePath: 'src/js'
        }
      }
    },
    copy: {
      base: {
        files: [
          {expand: true, cwd: 'src', src:'audio/*', dest: 'build'},
          {expand: true, cwd: 'src', src:'css/*', dest: 'build'},
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
        files: ['src/**/*.html'],
        tasks: ['copy'],
        options: {
          spawn: false
        }
      }
    }
});

grunt.loadNpmTasks('grunt-typescript');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['copy', 'typescript']);