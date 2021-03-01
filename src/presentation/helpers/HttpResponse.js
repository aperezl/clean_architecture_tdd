import { ServerError, UnauthorizedError } from '../errors'

export default class HttpResponse {
  static ok (body) {
    return {
      statusCode: 200,
      body
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
  }

  static serverError (paramName) {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message
      }
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message
      }
    }
  }
}
