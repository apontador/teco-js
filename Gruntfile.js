module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha: {
            all: {
                src: ['spec/SpecRunner.html'],
                options: {
                    run: false,
                    reporter: 'Spec'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');

    // Default task(s).
    grunt.registerTask('default', ['mocha']);
};
