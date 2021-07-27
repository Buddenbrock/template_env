const
  t3package = 'sitepackage_buddenbrock',
  paths = {
    src: './src',
    dest: './public'
  };

let tasks = {
  handlebars: {
    src: `${paths.src}/Hbs/pages/*.hbs`,
    data: {},
    options: {
      batch: [
        `${paths.src}/Hbs/modules`,
        `${paths.src}/Hbs/partials`
      ]
    },
    rename: {
      extname: '.html'
    }
  },
  scss: {
    src: `${paths.src}/Scss/*.scss`,
    base: `${paths.src}/Scss`,
    dest: `${paths.dest}/Css`
  },
  copyVendorCss: {
    // Add path/file to include to css
    src: [
      './node_modules/rellax/css/main.css',
    ],
    dest: `${paths.dest}/src/Scss/vendor`
  },
  image: {
    src: `${paths.src}Images/**/*`,
    dest: `${paths.dest}/Images`
  },
  video: {
    src: `${paths.src}Videos/**/*`,
    dest: `${paths.dest}/Videos` // .mp4, .avi, .mov in .gitignore
  },
  font: {
    src: `${paths.src}Fonts/*.*`,
    dest: `${paths.dest}/Fonts`
  },
  wasm: {
    src: `./node_modules/hyphenopoly/patterns/de.wasm`,
    concat: 'de-DE.wasm',
    dest: `${paths.dest}/JavaScript/patterns`
  },
  hyphenopoly: {
    src: `./node_modules/hyphenopoly/Hyphenopoly.js`,
    dest: `${paths.dest}/JavaScript`
  },
  babel: {
    srcs: [
      `${paths.src}/Hbs/modules/**/*.es6`,
      `${paths.src}/JavaScript/Controller/*.es6`,
      `${paths.src}/JavaScript/*.es6`
    ],
    concat: 'app.js',
    dest: `${paths.dest}/JavaScript`
  },
  bundle: {
    // Add path/file to include to bundle
    srcs: [
      './node_modules/hyphenopoly/Hyphenopoly_Loader.js',
    ],
    concat: 'bundle.js',
    dest: `${paths.dest}/JavaScript`
  },
};

module.exports = {
  t3package,
  paths,
  tasks
};
