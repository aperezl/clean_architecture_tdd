import cors from '../middleware/cors'

export default app => {
  app.disable('x-powered-by')
  app.use(cors)
}
