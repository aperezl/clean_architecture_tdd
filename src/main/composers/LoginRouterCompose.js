import AuthUseCase from '../../domain/usecases/AuthUseCase'
import LoadUserByEmailRepository from '../../infra/repositories/LoadUserByEmailRepository'
import UpdateAccessTokenRepository from '../../infra/repositories/UpdateAccessTokenRepository'
import LoginRouter from '../../presentation/routers/LoginRouter'
import EmailValidator from '../../utils/helpers/EmailValidator'
import Encrypter from '../../utils/helpers/Encrypter'
import TokenGenerator from '../../utils/helpers/TokenGenerator'
import env from '../config/env'

const tokenGenerator = new TokenGenerator(env.tokekSecret)
const encrypter = new Encrypter()
const loadUserByEmailRepository = new LoadUserByEmailRepository()
const updateAccessTokenRepository = new UpdateAccessTokenRepository()
const emailValidator = new EmailValidator()
const authUseCase = new AuthUseCase({
  loadUserByEmailRepository,
  updateAccessTokenRepository,
  encrypter,
  tokenGenerator
})
const loginRouter = new LoginRouter({ authUseCase, emailValidator })

export default loginRouter
