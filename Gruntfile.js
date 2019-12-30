module.exports = function(grunt) {
    var browsers = [
        {
            browserName: "firefox",
            version: "latest",
            platform: "WIN10"
        },
        {
            browserName: "googlechrome",
            version: "latest",
            platform: "WIN10"
        },
    ];

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        'saucelabs-qunit': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/index.html"],
                    tunnelTimeout: 5,
                    concurrency: 4,
                    browsers: browsers,
                    testname: "tests",
                    tags: ["master"],
                    framework: "qunit",
                    statusCheckAttempts: 300,
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-saucelabs');

    grunt.registerTask("default", ["connect", "saucelabs-qunit"]);
};
