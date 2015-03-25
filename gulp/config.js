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
  sass: {
    src: src + '/styles/main.sass',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
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
