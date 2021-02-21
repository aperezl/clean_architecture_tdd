module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
