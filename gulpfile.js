var exec = require('child_process').exec;
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', function() {
  // place code for your default task here
  // var date = new Date();
  // console.log(date);
  exec('vm_stat | grep "free"', function(err, stdout, stderr) {
    console.log(stdout);    
  });
});

gulp.task('jaded', function() {
  // place code for your default task here
  gulp.src('jade/*.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('html'))
});