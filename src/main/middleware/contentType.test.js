import request from 'supertest'

describe('Content-Type Middleware', () => {
  let app
  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app').default
  })
  test('should return json content type as default', async () => {
    app.get('/test_content_type', (req, res) => res.send(''))

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('should return xml content type if forced', async () => {
    app.get('/test_content_type', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /xml/)
  })
})
