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
    }
});

grunt.loadNpmTasks('grunt-typescript');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.registerTask('default', ['copy', 'typescript']);