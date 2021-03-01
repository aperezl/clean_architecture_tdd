import sut from './MongoHelper'

describe('Mongo Helper', () => {
  beforeAll(async () => await sut.connect(process.env.MONGO_URL))
  afterAll(async () => await sut.disconnect())

  test('should reconnect when getCollection() is invoked and client is disconnected', async () => {
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getCollection('test')
    expect(sut.db).toBeTruthy()
  })
})
