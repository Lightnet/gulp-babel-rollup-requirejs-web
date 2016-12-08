const gulp = require('gulp');
const rollup = require('gulp-rollup');
const babel = require('rollup-plugin-babel');
const gbabel = require('gulp-babel');
const json = require('rollup-plugin-json');
const concat = require('gulp-concat');
const server = require('gulp-express');
const del = require('del');

var babelconfig = {
    presets: [
      [
        "es2015", {
          "modules": false
        }
      ]
    ],
    babelrc: false,
    exclude: 'node_modules/**'
};

gulp.task('server', () => {
    // Start the server at the beginning of the task
    server.run(['index.js']);
});

//compile nodejs javascript
gulp.task('src', () => {
    return gulp.src(['src/**/*.js'])
    .pipe(rollup({
        plugins: [
            json(),
            //babel(babelconfig)
            babel()
        ],
        entry: './src/main.js'
        }))
		//.pipe(uglify())
        .pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('es6-amd',['src'], () =>{
    return gulp.src(['dist/bundle.js'])
    .pipe(gbabel({
        presets: ['es2015'],
        plugins: ["transform-es2015-modules-amd"]
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/app/'));
});

gulp.task('libs-copy',['src'], () =>{
    return gulp.src(['lib/*.js'])
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('html', () =>{
    return gulp.src(['index.html'])
    .pipe(gulp.dest('dist/'));
});

//watch files changes and auto compile file.
gulp.task('watch', () =>{
    gulp.watch(['lib/*.js'],['libs-copy']);
    gulp.watch(['src/**/*.js'],['clean-build']);
});

gulp.task('clean-build',['es6-amd'],()=>{
    return del(['dist/bundle.js']);
});

//main entry call task or default task call
gulp.task('default',['html','libs-copy','clean-build','server','watch']);
