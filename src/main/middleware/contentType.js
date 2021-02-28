export default (req, res, next) => {
  res.type('json')
  next()
}
