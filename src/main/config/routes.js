import { Router } from 'express'
import fb from 'fast-glob'

const router = Router()

export default app => {
  app.use('/api', router)
  fb.sync('**/src/main/routes/**.js')
    .forEach(async file => require(`../../../${file}`).default(router))
}
