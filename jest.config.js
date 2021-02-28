module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  preset: '@shelf/jest-mongodb',
  modulePathIgnorePatterns: ['globalConfig.json']
}
