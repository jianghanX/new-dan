var gulp = require("gulp");
var sass =  require('gulp-sass');
var babel =  require("gulp-babel"); //es6转es5
var es2015 =  require("babel-preset-es2015"); //es6转es5
var webpack = require("gulp-webpack"); 
var del = require('del'); 
var minifyCSS =  require('gulp-minify-css');

gulp.task("minifyCSS",function(){
	gulp.src("src/css/index.css")
	.pipe(minifyCSS())
	.pipe(gulp.dest("dist/css"))
})

gulp.task("sass",function(){
	gulp.src("src/css/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
})


gulp.task("webpack",function(){
	gulp.src(["src/js/lunbo.js","src/js/lunbo1.js"])
	.pipe(babel({presets:[es2015]}))
	.pipe(gulp.dest('dist/js'))
	.pipe(webpack({
		output:{
		filename:"lunb.js"  // 捆绑成什什么⽂文件？
		}
		}))
		.pipe(gulp.dest('dist/js'))
		.on('end',  function(){
			del(["dist/js/lunbo.js","dist/js/lunbo1.js"])
		})
})



//监听
gulp.task("auto",function(){
	gulp.watch("src/css/*.scss",['sass'])
})
