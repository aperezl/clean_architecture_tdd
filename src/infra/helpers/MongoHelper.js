import { MongoClient } from 'mongodb'

export default {
  async connect (uri, dbName) {
    this.uri = uri
    this.dbName = dbName
    this.connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = await this.connection.db(dbName)
  },

  async disconnect () {
    await this.connection.close()
    this.connection = null
    this.db = null
  },

  async getDb () {
    if (!this.connection || !this.connection.isConnected()) {
      await this.connect(this.uri, this.dbName)
    }
    return this.db
  }
}
