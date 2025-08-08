const gulp = require('gulp');
const gulpEsbuild = require('gulp-esbuild');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const { exec } = require('child_process');

const PROD_DEST = './dist';

// Copy package.json
function copyPackageJson() {
    return gulp.src('./package.json')
        .pipe(gulp.dest(PROD_DEST));
}

// Minify JS with esbuild
function minifyJs() {
    return gulp.src('src/public/assets/js/*.js')
        .pipe(gulpEsbuild({
            minify: true,
            target: 'es2017'
        }))
        .pipe(gulp.dest(path.join(PROD_DEST, 'public/assets/js')));
}

// Compile & minify SCSS
function minifyCss() {
    return gulp.src('src/public/assets/css/**/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(path.join(PROD_DEST, 'public/assets/css')));
}

// Copy other public assets except for JS and CSS
function copyPublicAssets() {
    return gulp.src([
            'src/public/**/*',
            '!src/public/assets/js/**',
            '!src/public/assets/css/**'
        ])
        .pipe(gulp.dest(path.join(PROD_DEST, 'public')));
}

// Copy views folder
function copyViews() {
    return gulp.src('src/views/**/*')
        .pipe(gulp.dest(path.join(PROD_DEST, 'views')));
}

// Run npm install --only=production in PROD_DEST
function npmInstall(cb) {
    exec('npm install --only=production', { cwd: PROD_DEST }, function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        cb(err);
    });
}

// Default task: sequence all steps
exports.default = gulp.series(
    copyPackageJson,
    gulp.parallel(
        minifyJs,
        minifyCss,
        copyPublicAssets,
        copyViews
    ),
    npmInstall
);
