import validator from 'validator'

import { MissingParamError } from '../errors'
import EmailValidator from './EmailValidator'

jest.mock('validator', () => ({
  isEmailValid: true,
  isEmail (email) {
    this.email = email
    return this.isEmailValid
  }
}))
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

  test('should call validator with correct email', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })

  test('should throw if no email is provided', async () => {
    const sut = makeSut()
    expect(() => { sut.isValid() }).toThrow(new MissingParamError('email'))
  })
})
