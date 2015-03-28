var dest = './dist';
var src = './src';

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8081,
      livereload: {
        port: 35929
      }
    }
  },
  styles: {
    src: ['node_modules/todomvc-common/base.css', 'node_modules/todomvc-app-css/index.css'],
    dest: dest + '/styles'
  },
  browserify: {
    src: src + '/js/index.js',
    dest: dest + '/js',
    outputName: 'index.js'
  },
  html: {
    src: 'src/*.html',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  },
  assets: {
    src: src + '/{images,fonts}/**',
    dest: dest
  }
};
