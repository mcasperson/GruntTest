module.exports = function (grunt) {
    grunt.initConfig({
        'octo-pack': {
            packageNoDist: {
                options: {
                    dst: './bin',
                    type: 'zip'
                },
                src: ['**/*'],
                cwd: 'dist'
            }
        }
    });


    grunt.loadNpmTasks('@octopusdeploy/grunt-octo');

    grunt.registerTask('default', ['octo-pack:packageNoDist']);
};