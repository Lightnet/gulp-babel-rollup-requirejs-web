const gulp = require('gulp');
const rollup = require('gulp-rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const concat = require('gulp-concat');

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

//watch files changes and auto compile file.
gulp.task('watch', () =>{
    gulp.watch(['src/**/*.js'],['src']);
});

//main entry call task or default task call
gulp.task('default',['src','watch']);
