import validator from 'validator'

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}
describe('Email Validator', () => {
  test('should return true if validator return true', () => {
    const sut = makeSut()
    const isValidEmail = sut.isValid('valid_email@mail.com')
    expect(isValidEmail).toBe(true)
  })

  test('should return false if validator return false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })
})
