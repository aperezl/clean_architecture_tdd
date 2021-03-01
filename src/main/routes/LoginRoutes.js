import ExpressRouterAdapter from '../adapters/ExpressRouterAdapter'
import LoginRouterCompose from '../composers/LoginRouterCompose'

export default async router => {
  router.post('/login', ExpressRouterAdapter.adapt(LoginRouterCompose.compose()))
}
