import {src, dest} from 'gulp';

import {t3package} from '../../build-config.js';

/**
 * @desc Copy all public assets into sitepackage
 * @param done
 */
let copyToSitePackage = (done) => {
  src([
    './public/Css/*',
    './public/Fonts/**/*',
    './public/Images/**/*',
    './public/Videos/**/*',
    './public/JavaScript/**/*'
  ], {
    base: './public'
  })
    .pipe(dest('../../packages/' + t3package + '/Resources/Public/'));

  done();
};

module.exports = copyToSitePackage;
