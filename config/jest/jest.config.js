module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: '../../',
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverageFrom: ['src/store/**/sagas.{js}']
};
