import { MissingParamError } from '../../utils/errors'
import MongoHelper from '../helpers/MongoHelper'

export default class UpdateAccessTokenRepository {
  async update (userId, accessToken) {
    if (!userId) {
      throw new MissingParamError('userId')
    }
    if (!accessToken) {
      throw new MissingParamError('accessToken')
    }
    const userModel = await MongoHelper.getCollection('users')
    await userModel.updateOne({
      _id: userId
    }, {
      $set: {
        accessToken
      }
    })
  }
}
