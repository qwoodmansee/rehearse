const {defaults} = require('jest-config');
module.exports = {
  preset: "jest-expo",
  resetMocks: true,
  restoreMocks: true,
  testMatch: ['**/*-test.js', '**/test/**/*-test.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  ],
};