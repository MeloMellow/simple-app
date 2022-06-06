import { UnauthorizedError, ServerError, ForbiddenError } from './errors'

export interface IHttpResponse{
  statusCode: number
  body: {} | string
}
export class HttpResponse {
  static badRequest (error: Error): IHttpResponse {
    return {
      statusCode: 400,
      body: { error: error.message }
    }
  }

  static serverError (): IHttpResponse {
    return {
      statusCode: 500,
      body: { error: new ServerError().message }
    }
  }

  static unauthorizedError (): IHttpResponse {
    return {
      statusCode: 401,
      body: { error: new UnauthorizedError().message }
    }
  }

  static forbiddenError (): IHttpResponse {
    return {
      statusCode: 403,
      body: { error: new ForbiddenError().message }
    }
  }

  static ok (body: {} | string): IHttpResponse {
    return {
      statusCode: 200,
      body
    }
  }
}