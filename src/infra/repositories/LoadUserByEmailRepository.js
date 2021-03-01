import { MissingParamError } from '../../utils/errors'
import MongoHelper from '../helpers/MongoHelper'

export default class LoadUserByEmailRepository {
  async load (email) {
    if (!email) {
      throw new MissingParamError('email')
    }
    const db = await MongoHelper.getDb()
    const user = await db.collection('users').findOne({ email }, {
      projection: { password: 1 }
    })
    return user
  }
}
