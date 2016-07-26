var gulp = require("gulp"),
	sass = require("gulp-sass"),
	concat = require("gulp-concat");

gulp.task("sass", function () {
	return gulp.src("./sass/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
	gulp.watch("./sass/**/*.scss", ["sass"]);
});

// gulp.task("scripts", function () {
// 	return gulp.src("./js/*.js")
// 		.pipe(concat("app.js"))
// 		.pipe(gulp.dest("./js/"))
// });

gulp.task("default", ["sass:watch"]);