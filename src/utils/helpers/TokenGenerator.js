import jwt from 'jsonwebtoken'

import { MissingParamError } from '../errors'

export default class TokenGenrator {
  /**
   * @class TokenGenrator
   * @param {string} secret
   */
  constructor (secret) {
    this.secret = secret
  }

  /**
   * @param {string} id
   * @returns string
   * @memberof TokenGenrator
   */
  async generate (id) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    if (!id) {
      throw new MissingParamError('id')
    }
    return jwt.sign({ _id: id }, this.secret)
  }
}
