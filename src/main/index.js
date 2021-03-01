import MongoHelper from '../infra/helpers/MongoHelper'
import app from './config/app'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(env.port, () => console.log(`Server Running at http://localhost:${env.port}`))
  })
  .catch(console.error)
