import request from 'supertest'

import app from '../config/app'

describe('CORS Middleware', () => {
  test('should enable CORS', async () => {
    app.get('/test_cors', (req, res) => res.send(''))
    const res = await request(app).get('/test_x_powered_by')
    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-methods']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
  })
})
