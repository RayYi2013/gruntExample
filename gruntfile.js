'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                strict: true,
                node: true,
                camelcase: true,
                unused: true,
                bitwise: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: true,
                regexp: true,
                undef: true,
                trailing: true,
                smarttabs: true,
                expr: true,
                globals: {
                    describe: false,
                    it: false,
                    before: false,
                    beforeEach: false,
                    after: false,
                    afterEach: false
                }
            },
            all: [
                'gruntfile.js',
                'lib/**/*.js',
                'test/**/*.js'
            ]
        },
        mochaTest: {
            gracefuleDegradationApiTests: {
                options: {
                    reporter: 'spec',
                    require: 'coverage/blanket'
                },
                src: [
                    'test/**/*.js'
                ]
            },
            gracefuleDegradationApiCoverageHtml: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage/coverage.html'
                },
                src: [
                    'test/**/*.js'
                ]
            },
            gracefuleDegradationApiCoverageJson: {
                options: {
                    reporter: 'json-cov',
                    quiet: true,
                    captureFile: 'coverage/coverage.json'
                },
                src: [
                    'test/**/*.js'
                ]
            }
        },
        env: {
            options: {},
            dev: {
                NODE_ENV: 'development'
            },
            test: {
                NODE_ENV: 'development'
            },
            production: {
                NODE_ENV: 'production'
            }
        },
        watch: {
            files: [
                'lib/**/*.js',
                'test/**/*.js',
                'gruntfile.js'
            ],
            tasks: [
                'jshint',
                'test'
            ]
        },
        shell: {
            jsdoc: {
                options: {
                    stdout: false
                },
                command: './node_modules/.bin/jsdoc -d ./doc/ ./lib/throttling-api.js ./lib/throttler.js'
            }
        }
    });

    grunt.registerTask('test', [
        'env:test',
        'mochaTest'
    ]);

    grunt.registerTask('buildAll', [
        'build',
        'shell:jsdoc'
    ]);

    grunt.registerTask('build', [
        'env:production',
        'jshint'
    ]);

    grunt.registerTask('default', [
        'build',
        'test',
        'watch'
    ]);
};