export default class UnauthorizedError extends Error {
  constructor (paramName) {
    super('UnauthorizedError')
    this.name = 'UnauthorizedError'
  }
}
