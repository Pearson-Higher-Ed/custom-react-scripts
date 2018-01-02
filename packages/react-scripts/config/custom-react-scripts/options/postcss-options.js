const autoprefixer = require('autoprefixer');

module.exports = {
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    require('precss'),
    require('postcss-constants'),
    autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    }),
  ],
};
