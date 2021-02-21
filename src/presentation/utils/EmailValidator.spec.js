class EmailValidator {
  isValid (email) {
    return true
  }
}
describe('Email Validator', () => {
  test('should return true if validator return true', () => {
    const sut = new EmailValidator()
    const isValidEmail = sut.isValid('valid_email@mail.com')
    expect(isValidEmail).toBe(true)
  })
})
