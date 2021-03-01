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
    const db = await MongoHelper.getDb()
    await db.collection('users').updateOne({
      _id: userId
    }, {
      $set: {
        accessToken
      }
    })
  }
}
