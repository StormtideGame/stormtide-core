// @flow

"use strict";

import gulp from "gulp";

import plumber from "gulp-plumber";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import watch from "gulp-watch";
import merge from "merge-stream";

const build: Object = {};

build.lib = (files = "src/**/*.js") => {
	return gulp.src(files, { base: "src" })
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("lib"));
};

build.json = (files = "src/**/*.json") => {
	return gulp.src(files, { base: "src" })
		.pipe(gulp.dest("lib"));
};

build.watch = () => {
	watch("src/**/*.js", change => build.lib(change.path));
	watch("src/**/*.json", change => build.json(change.path));
};

build.default = () => merge([build.lib(), build.json()]);

for (const key of Object.keys(build)) {
	gulp.task(key, build[key]);
}