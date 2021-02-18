module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('UnauthorizedError')
    this.name = 'UnauthorizedError'
  }
}
