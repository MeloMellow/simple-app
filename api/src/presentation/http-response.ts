import { UnauthorizedError, ServerError } from './errors'

module.exports = class HttpResponse {
  static badRequest (error: Error) {
    return {
      statusCode: 400,
      body: { error: error.message }
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: { error: new ServerError().message }
    }
  }

  static anauthorizedError () {
    return {
      statusCode: 401,
      body: { error: new UnauthorizedError().message }
    }
  }

  static ok (body: any) {
    return {
      statusCode: 200,
      body
    }
  }
}