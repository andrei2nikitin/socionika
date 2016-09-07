module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                    paths: ["less"],
                    compress: false
                },
                files: {
                    "public/static/css/main.css": [
                        "src/less/fonts.less",
                        "src/less/normalize.css",
                        "src/less/layout.less",
                        "src/less/main.less"
                    ]
                }
            },
            prod: {
                options: {
                    paths: ["less"],
                    compress: true
                },
                files: {
                    "public/static/css/main.css": [
                        "src/less/fonts.less",
                        "src/less/normalize.css",
                        "src/less/layout.less",
                        "src/less/main.less"
                    ]
                }
            }
        },
        uglify: {
            dev: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: {
                    'public/static/js/main.js': [
                        'src/js/tf-banner.js',
                        'src/js/test.js',
                        'src/js/main.js'
                    ]
                }
            },
            prod: {
                files: {
                    'public/static/js/main.js': [
                        'src/js/tf-banner.js',
                        'src/js/test.js',
                        'src/js/main.js'
                    ]
                }
            }
        },
        concat: {
            dev: {
                files: {
                    'public/static/js/main.js': [
                        'src/js/tf-banner.js',
                        'src/js/test.js',
                        'src/js/main.js'
                    ]
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/*'],
                tasks: ['concat:dev'],
                options: {
                    spawn: false
                }
            },
            less: {
                files: ['src/less/*'],
                tasks: ['less', 'autoprefixer:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('dev', ['less:dev', 'concat:dev']);
    grunt.registerTask('prod', ['less:prod', 'uglify:prod']);
};
