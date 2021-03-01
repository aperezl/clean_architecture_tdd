import { MissingParamError } from '../../utils/errors'
import MongoHelper from '../helpers/MongoHelper'

export default class LoadUserByEmailRepository {
  async load (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    const userModel = await MongoHelper.getCollection('users')
    const user = await userModel.findOne({ email }, {
      projection: { password: 1 }
    })
    return user
  }
}
