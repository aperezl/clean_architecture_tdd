import validator from 'validator'

export default class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}
