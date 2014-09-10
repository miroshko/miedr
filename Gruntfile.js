var grunt = require('grunt');

grunt.initConfig({
    typescript: {
      base: {
        src: ['src/js/**/*.ts'],
        dest: 'build/js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          basePath: '',
          sourceMap: true,
          declaration: true
        }
      }
    },
});

grunt.loadNpmTasks('grunt-typescript');