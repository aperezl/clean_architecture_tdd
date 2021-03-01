import loginRouter from '../composers/LoginRouterCompose'

export default async router => {
  router.post('/login', loginRouter)
}
