import contentType from '../middleware/contentType'
import cors from '../middleware/cors'
import jsonParser from '../middleware/jsonParser'

export default app => {
  app.disable('x-powered-by')
  app.use(cors)
  app.use(jsonParser)
  app.use(contentType)
}
