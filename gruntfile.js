module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    }


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');

}; //wrapper function