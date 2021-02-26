import { MissingParamError } from '../../utils/errors'

export default class LoadUserByEmailRepository {
  constructor (userModel) {
    this.userModel = userModel
  }

  async load (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    const user = await this.userModel.findOne({ email }, {
      projection: { password: 1 }
    })
    return user
  }
}
