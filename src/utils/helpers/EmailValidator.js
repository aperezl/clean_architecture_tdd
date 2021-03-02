import validator from 'validator'

import { MissingParamError } from '../errors'

export default class EmailValidator {
  /**
   * @class EmailValidator
   */

  /**
   * isValid
   * @memberof EmailValidator
   * @param {string} email
   * @returns {boolean}
   *
   */
  isValid (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    return validator.isEmail(email)
  }
}
