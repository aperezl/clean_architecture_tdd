import bcrypt from 'bcrypt'

class Encrypter {
  async compare (value, hash) {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}

const makeSut = () => {
  return new Encrypter()
}
describe('Encrypter', () => {
  test('should return true if bcrypt return true', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'hashed_value')
    expect(isValid).toBe(true)
  })

  test('should return true if bcrypt return true', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    const isValid = await sut.compare('invalid_value', 'hashed_value')
    expect(isValid).toBe(false)
  })

  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()
    await sut.compare('any_value', 'hashed_value')
    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hashed_value')
  })
})
