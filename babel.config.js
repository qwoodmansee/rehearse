module.exports = function (api) {
  api.cache.never();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        'alias': {
          '@auth': './modules/auth',
          '@core': './modules/core',
          '@navigation': './modules/navigation/',
          '@home': './modules/home',
          '@player': './modules/player',
          '@song-selection': './modules/song-selection',
          '@theme': './modules/theme',
          '@root': './',
          'underscore': 'lodash',
        },
      }],
    ],
  };
};
