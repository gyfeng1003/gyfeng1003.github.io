// 获取 gulp
var gulp = require('gulp');
var imageMin = require('gulp-imagemin');

gulp.task('image',function(){
	gulp.src('images/*.*')
		.pipe(imageMin({optimizationLevel: 5,progressive: true}))
		.pipe(gulp.dest('./images1'))
})

gulp.task('default',['image'])
