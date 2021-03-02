import bcrypt from 'bcrypt'

import { MissingParamError } from '../errors'

export default class Encrypter {
  /**
   * @class Encrypter
   */

  /**
   * compare
   * @param {string} value
   * @param {string} hash
   * @returns boolean
   * @memberof Encrypter
   */
  async compare (value, hash) {
    if (!value) {
      throw new MissingParamError('value')
    }
    if (!hash) {
      throw new MissingParamError('hash')
    }
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
