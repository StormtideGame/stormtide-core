// @flow

"use strict";

const gulp = require("gulp");

const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

const build = (files = "src/**/*.js") => {
	return gulp.src(files, { base: "src" })
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("lib"));
};

gulp.task("default", build);

gulp.task("watch", () => {
	gulp.watch("src/**/*.js", change => {
		console.log("Rebuilding", change.path);

		return build(change.path);
	});
});