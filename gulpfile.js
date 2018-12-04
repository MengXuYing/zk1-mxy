/*
 * @Author: mengxuying 
 * @Date: 2018-12-03 08:53:59 
 * @Last Modified by: mengxuying
 * @Last Modified time: 2018-12-04 18:29:41
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

var minCss = require('gulp-clean-css');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

var fs = require('fs');

var path = require('path');

var url = require('url');

var list = require('./mock/list.json');

//sass
gulp.task('devCss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
});

//js
// gulp.task('devJs', function() {
//     return gulp.src('./src/js/**/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('./src/minJs'))
// });


// //监听sass js
// gulp.task('watch', function() {
//     gulp.watch(['./src/scss/*.scss', './src/js/**/*.js'], gulp.series(['devCss', 'devJs']))
// })


// //服务
// gulp.task('server', function() {
//     return gulp.src('src')
//         .pipe(server({
//             potr: 9090,
//             open: true,
//             middleware: function(req, res, next) {
//                 if (req.url === '/favicon.ico') {
//                     res.end('');
//                     return;
//                 }
//                 var pathname = url.parse(req.url).pathname;

//                 if (pathname === '/api/user') {
//                     res.end(JSON.stringify({ code: 1, data: list }));
//                 } else {
//                     pathname = pathname === '/' ? '/index.html' : pathname;
//                     res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
//                 };
//             }
//         }))
// })

// gulp.task('default', gulp.series('devCss', 'devJs', 'server', 'watch'))