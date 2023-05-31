const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const imagemin = require("gulp-imagemin");

function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 10 versions"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", 
              'node_modules/slick-carousel/slick/slick.js',
              'node_modules/@fancyapps/ui/dist/index.umd.js',
              'node_modules/rateyo/src/jquery.rateyo.js',
              'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
              'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
              'node_modules/mixitup/dist/mixitup.js',
              'node_modules/just-validate/dist/just-validate.production.min.js',
              'node_modules/inputmask/dist/inputmask.min.js',
              "app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function build() {
  return src(["app/**/*.html", "app/css/style.min.css", "app/js/main.min.js"], {
    base: "app",
  }).pipe(dest("dist"));
}

function cleanDist() {
  return del("dist");
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;

exports.default = parallel(styles, scripts, watching);

exports.cleanDist = cleanDist;
exports.images = images;

exports.build = series(cleanDist, images, build);
