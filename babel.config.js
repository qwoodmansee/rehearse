module.exports = function (api) {
  api.cache.never();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        'alias': {
          '@core': './modules/core',
          '@navigation': './modules/navigation/',
          '@home': './modules/home',
          '@theme': './modules/theme',
          '@root': './',
          'underscore': 'lodash',
        },
      }],
    ],
  };
};
