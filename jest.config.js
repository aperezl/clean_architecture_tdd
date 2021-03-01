module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/index.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  preset: '@shelf/jest-mongodb',
  modulePathIgnorePatterns: ['globalConfig.json']
}
