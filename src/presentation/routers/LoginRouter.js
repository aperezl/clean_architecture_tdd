import { InvalidParamError, MissingParamError } from '../../utils/errors'
import HttpResponse from '../helpers/HttpResponse'

export default class LoginRouter {
  /**
   * LoginRouter
   *
   * @export
   * @class LoginRouter
   *
   * @param {*} [{ authUseCase, emailValidator }={}]
   */
  constructor ({ authUseCase, emailValidator } = {}) {
    this.authUseCase = authUseCase
    this.emailValidator = emailValidator
  }

  /**
   * route
   *
   * @param {string} httpRequest
   * @returns string
   * @memberof LoginRouter
   */
  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'))
      }
      if (!this.emailValidator.isValid(email)) {
        return HttpResponse.badRequest(new InvalidParamError('email'))
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError('password'))
      }
      const accessToken = await this.authUseCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }
      return HttpResponse.ok({ accessToken })
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}
