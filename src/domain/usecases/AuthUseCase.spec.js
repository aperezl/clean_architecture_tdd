import { InvalidParamError, MissingParamError } from '../../utils/errors'
import AuthUseCase from './AuthUseCase'

const makeSut = () => {
  class LoadUserByEmailRepositorySpy {
    async load (email) {
      this.email = email
    }
  }
  const loadUserByEmailRepository = new LoadUserByEmailRepositorySpy()
  const sut = new AuthUseCase(loadUserByEmailRepository)
  return {
    sut,
    loadUserByEmailRepository
  }
}

describe('Auth UseCase', () => {
  test('should throw if no email is provided', () => {
    const { sut } = makeSut()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })

  test('should throw if no password is provided', () => {
    const { sut } = makeSut()
    const promise = sut.auth('any_email@mail.com')
    expect(promise).rejects.toThrow(new MissingParamError('password'))
  })

  test('should call LoadUserByEmailRepository with correct email', async () => {
    const { sut, loadUserByEmailRepository } = makeSut()
    await sut.auth('any_email@mail.com', 'any_password')
    expect(loadUserByEmailRepository.email).toBe('any_email@mail.com')
  })

  test('should throw if no LoadUserRepository is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth('any_email@mail.com', 'any_password')
    expect(promise).rejects.toThrow(new MissingParamError('loadUserByEmailRepository'))
  })

  test('should throw if LoadUserRepository has no load method', async () => {
    const sut = new AuthUseCase({})
    const promise = sut.auth('any_email@mail.com', 'any_password')
    expect(promise).rejects.toThrow(new InvalidParamError('loadUserByEmailRepository'))
  })

  test('should return null if LoadUserRepository return null', async () => {
    const { sut } = makeSut()
    const accessToken = await sut.auth('invalid_email@mail.com', 'invalid_password')
    expect(accessToken).toBeNull()
  })
})
