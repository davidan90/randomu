module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: '../../',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper:  {
    "\\.(css|sass|scss)$": '<rootDir>/config/jest/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: ['src/store/**/sagas.{js}']
};
