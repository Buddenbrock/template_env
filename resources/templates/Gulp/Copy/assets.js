import {src, dest} from 'gulp';

import concat from 'gulp-concat';

import {tasks} from '../../build-config';

/**
 * @desc Copy images to public
 * @returns {*}
 */
let image = () => {
  return src(tasks.image.src)
    .pipe(dest(tasks.image.dest));
};

/**
 * @desc Copy videos to public
 * @returns {*}
 */
let video = () => {
  return src(tasks.video.src)
    .pipe(dest(tasks.video.dest));
};

/**
 * @desc Copy fonts to public
 * @returns {*}
 */
let font = () => {
  return src(tasks.font.src)
    .pipe(dest(tasks.font.dest));
};

/**
 * @desc Copy WebAssembly to public
 * @returns {*}
 */
let wasm = () => {
  return src(tasks.wasm.src)
    .pipe(concat(tasks.wasm.concat))
    .pipe(dest(tasks.wasm.dest));
};

/**
 * @desc Copy hyphenopoly to public
 * @returns {*}
 */
let hyphenopoly = () => {
  return src(tasks.hyphenopoly.src)
    .pipe(dest(tasks.hyphenopoly.dest));
};

module.exports = {image, video, font, wasm, hyphenopoly};
