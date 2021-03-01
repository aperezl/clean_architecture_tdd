import bcrypt from 'bcrypt'

import { MissingParamError } from '../errors'
import Encrypter from './Encrypter'

jest.mock('bcrypt', () => ({
  isValid: true,
  async compare (value, hash) {
    this.value = value
    this.hash = hash
    return this.isValid
  }
}
))

const makeSut = () => {
  return new Encrypter()
}
describe('Encrypter', () => {
  test('should return true if bcrypt return true', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'hashed_value')
    expect(isValid).toBe(true)
  })

  test('should return true if bcrypt return true', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    const isValid = await sut.compare('invalid_value', 'hashed_value')
    expect(isValid).toBe(false)
  })

  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()
    await sut.compare('any_value', 'hashed_value')
    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hashed_value')
  })

  test('should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(sut.compare()).rejects.toThrow(new MissingParamError('value'))
    expect(sut.compare('any_value')).rejects.toThrow(new MissingParamError('hash'))
  })
})
