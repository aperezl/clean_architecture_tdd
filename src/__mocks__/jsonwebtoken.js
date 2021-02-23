export default {
  token: 'any_token',
  id: '',
  secret: '',
  sign (id, secret) {
    this.id = id
    this.secret = secret
    return this.token
  }
}
