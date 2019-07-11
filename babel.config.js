module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [   
      ['module-resolver', {
        'alias': {
          '@core': './modules/core',
          '@navigation': './modules/navigation/',
          '@home': './modules/home',
          'underscore': 'lodash',
        }
      }]
    ],
  };
};
