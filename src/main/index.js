import MongoHelper from '../infra/helpers/MongoHelper'
import app from './config/app'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(3000, () => console.log('server running'))
  })
  .catch(console.error)
