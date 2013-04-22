/*jshint scripturl:true*/
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha: {
            test: {
                src: ['spec/SpecRunner.html'],
                options: {
                    run: false,
                    reporter: 'Dot'
                }
            },
            spec: {
                src: ['spec/SpecRunner.html'],
                options: {
                    run: false,
                    reporter: 'Spec'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'apontador/**/*.js', 'spec/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['mocha:spec']);
};
