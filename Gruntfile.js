module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      all: {
        files: [{
          'css/bootstrap.min.css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'js/bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'js/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
        }, {
          expand: true,
          flatten: true,
          src: ['bower_components/bootstrap/dist/fonts/**'],
          dest: 'fonts/',
          filter: 'isFile'
        }]
      }
    },
    less: {
      build: {
        files: {
          'css/main.css': 'less/main.less'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', [
    'copy',
    'less',
  ]);
};
