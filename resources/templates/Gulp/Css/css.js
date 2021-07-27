import {src, dest} from 'gulp';

import rename from 'gulp-rename';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';

import {tasks} from '../../build-config';

const browser = browserSync.create();

/**
 * @desc Copy vendor css files from node_modules to src, to import in main.scss
 * @returns {*}
 */
let copyVendorCss = () => {
  return src(tasks.copyVendorCss.src)
    .pipe(rename({prefix: '_', extname: '.scss'}))
    .pipe(dest(tasks.copyVendorCss.dest));
}

/**
 * @desc Converts scss to css and copy to public
 * @series copyVendorCss {function}
 */
let scss = () => {
  return src(tasks.scss.src, {base: tasks.scss.base})
    .pipe(changed(tasks.scss.src))
    .pipe(sass({
        includePaths: require('node-normalize-scss').includePaths
      }
    ))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cssnano())
    .pipe(dest(tasks.scss.dest))
    .pipe(browser.stream());
}

module.exports = {copyVendorCss, scss};
