import { MissingParamError } from '../../utils/errors'

export default class AuthUseCase {
  /**
   * AuthUseCase
   *
   * @export
   * @class AuthUseCase
   */
  constructor ({ loadUserByEmailRepository, updateAccessTokenRepository, encrypter, tokenGenerator } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.updateAccessTokenRepository = updateAccessTokenRepository
    this.encrypter = encrypter
    this.tokenGenerator = tokenGenerator
  }

  /**
   * auth Method
   * @param {string} email Email
   * @param {string} password Password
   * @memberof AuthUseCase
   */
  async auth (email, password) {
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }

    const user = await this.loadUserByEmailRepository.load(email)
    const isValid = user && await this.encrypter.compare(password, user.password)
    if (isValid) {
      const accessToken = await this.tokenGenerator.generate(user._id)
      await this.updateAccessTokenRepository.update(user._id, accessToken)
      return accessToken
    }
    return null
  }
}
