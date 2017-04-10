"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

var config = {
    port: 8005,
    devBaseUrl: "http://localhost",
    path: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        dist: "./dist",
        mainJS: "./src/main.js"
    }
};

gulp.task("connect", function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task("open", ["connect"], function () {
   gulp.src("dist/index.html")
       .pipe(open({uri : config.devBaseUrl + ":" + config.port + "/"}));
});

gulp.task("html", function () {
   gulp.src(config.path.html)
       .pipe(gulp.dest(config.path.dist))
       .pipe(connect.reload());
});

gulp.task("js", function () {
   browserify(config.path.mainJS)
       .transform(reactify)
       .bundle()
       .on("error", console.error.bind(console))
       .pipe(source("bundle.js"))
       .pipe(gulp.dest(config.path.dist + "/scripts"))
       .pipe(connect.reload());
});

gulp.task("watch", function () {
   gulp.watch(config.path.html, ["html"]);
   gulp.watch(config.path.js, ["js"]);
});

gulp.task("default", ["html", "js", "open", "watch"]);