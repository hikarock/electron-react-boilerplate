const gulp     = require('gulp');
const $        = require('gulp-load-plugins')();
const electron = require('electron-connect').server.create();

const srcDir  = 'src';
const destDir = 'dest';

gulp.task('build', function() {
  return gulp.src(srcDir + '/**/*.{js,jsx}')
    .pipe($.babel())
    .pipe(gulp.dest(destDir));
});

gulp.task('start', ['build'], function() {
  electron.start();
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['build']);
  gulp.watch(['main.js'], electron.restart);
  gulp.watch(['index.html', destDir + '/**/*.{html,js,css}'], electron.reload);
});
