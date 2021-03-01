import { Router } from 'express'
import fg from 'fast-glob'

const router = Router()

export default app => {
  app.use('/api', router)
  fg.sync('**/src/main/routes/**Routes.js')
    .forEach(async file => require(`../../../${file}`).default(router))
}
