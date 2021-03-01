import { MongoClient } from 'mongodb'

export default {
  async connect (uri) {
    this.uri = uri
    this.connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = this.connection.db()
  },

  async disconnect () {
    await this.connection.close()
    this.connection = null
    this.db = null
  },

  async getCollection (name) {
    if (!this.connection || !this.connection.isConnected()) {
      await this.connect(this.uri)
    }
    return this.db.collection(name)
  }
}
