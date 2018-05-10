module.exports = function (grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [
            { name: "placeholder", quality: 20, width: 27 },
            { name: "small", suffix: "_@1x", quality: 60, width: 300 },
            { name: "small", suffix: "_@2x", quality: 60, width: 600 },
            { name: "medium", suffix: "_@1x", quality: 60, width: 720 },
            { name: "medium", suffix: "_@2x", quality: 60, width: 1440 },
            { name: "lg", suffix: "_@1x", quality: 60, width: 1500 },
            { name: "lg", suffix: "_@2x", quality: 60, width: 3000 }
          ]
        },
        files: [
          {
            expand: true,
            src: [ "**/*.{jpg,png}" ],
            cwd: "public/responsive-images/src/",
            dest: "public/responsive-images/dist/"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.registerTask("default", [ "responsive_images" ]);
};
