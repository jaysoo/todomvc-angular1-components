'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require("babelify");
var watchify = require('watchify');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var objectAssign = require('react/lib/Object.assign');

var config = require('../config').browserify;

var bundler = browserify(objectAssign({ debug: true }, watchify.args)).
      // Transform ES6 to ES5 using babel.
      transform(
        babelify.configure({
          experimental: true, // allows ES7 features
          optional: ['runtime'] // include required runtime for regenerator
        })
      ).require(config.src, { entry: true })

// Wrap with watchify so re-processing is faster.
bundler = watchify(bundler);

var bundle = function () {
  return bundler.
    bundle().
    on('error', gutil.log.bind(gutil, 'Browserify Error')).
    pipe(source(config.outputName)).
    pipe(gulp.dest(config.dest)).
    pipe(connect.reload());
};

gulp.task('browserify', bundle);
bundler.on('update', bundle);
