module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        }
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Grunt');
            done();
        }, 3000);
    })

    grunt.loadNpm('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
}