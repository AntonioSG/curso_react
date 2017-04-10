"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");

gulp.task("connect", function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

