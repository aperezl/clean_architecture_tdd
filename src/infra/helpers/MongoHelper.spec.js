import MongoHelper from './MongoHelper'

describe('Mongo Helper', () => {
  test('should reconnect when getDb() is invoked and client is disconnected', async () => {
    const sut = MongoHelper
    await sut.connect(process.env.MONGO_URL)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    expect(await sut.getDb()).toBeTruthy()
    await sut.disconnect()
  })
})
