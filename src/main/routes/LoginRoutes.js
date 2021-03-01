import ExpressRouterAdapter from '../adapters/ExpressRouterAdapter'
import loginRouter from '../composers/LoginRouterCompose'

export default async router => {
  router.post('/login', ExpressRouterAdapter.adapt(loginRouter))
}
