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
        },
        shell: {
            bower: {
                command: 'node_modules/.bin/bower install',
                options: {
                    stdout: true
                }
            }
        },
        release: {
            file: 'bower.json',
            npm: false
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-release');

    // Default task(s).
    grunt.registerTask('install', ['shell:bower']);
    grunt.registerTask('default', ['mocha:spec']);
    grunt.registerTask('test', ['jshint', 'default']);
    grunt.registerTask('ci', ['install', 'test']);
};
