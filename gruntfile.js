module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '\n\n//------------------------------------------\n'
      },
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    }
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);


}; //wrapper function