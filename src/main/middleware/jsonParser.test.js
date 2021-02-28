import request from 'supertest'

import app from '../config/app'

describe('JSON Parser Middleware', () => {
  test('should parse body as JSON', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.json(req.body)
    })

    await request(app)
      .post('/test_json_parser')
      .send({ name: 'Mango' })
      .expect({ name: 'Mango' })
  })
})
