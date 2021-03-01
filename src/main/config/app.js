import express from 'express'

import setupRoutes from './routes'
import setupApp from './setup'

const app = express()

setupApp(app)
setupRoutes(app)

export default app
