/*jshint node:true */
module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            options: {
                specs: 'test/**/{spec,*Spec}.js'
            },
            src: {
                src: 'src/**/*.js'
            },
            dist: {
                src: 'dist/**/*.js'
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: ['package.json', 'Gruntfile.js'],
            test: 'test/**/*.js',
            src: 'src/**/*.js',
            dist: {
                options: {
                    devel: false
                },
                src: 'dist/**/*.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> */\n',
                footer: '\n/*! generated <%= grunt.template.today("yyyy-mm-dd h:mm:ss TT") %> */'
            },
            src: {
                files: {
                    'dist/string.format.min.js': 'dist/string.format.js'
                }
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            grunt: {
                files: ['package.json', 'Gruntfile.js'],
                tasks: ['default']
            },
            js: {
                files: ['.jshintrc', '{src,test}/**/*.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint:grunt', 'jshint:src', 'jasmine:src', 'jshint:dist', 'jasmine:dist', 'uglify', 'jasmine:dist']);
};