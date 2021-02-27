import express from 'express'

import setupApp from './setup'

const app = express()

setupApp(app)

export default app
