export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean_architecture_tdd',
  tokekSecret: process.env.TOKEN_SECRET || 'secret'
}
