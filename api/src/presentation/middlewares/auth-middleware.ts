import TokenValidator from "../../utils/token-validator"
import { IHttpRequest } from "../http-request"
import { HttpResponse, IHttpResponse } from "../http-response"
import { IMiddlewareProtocol } from "../protocols/middleware-protocol"


export class AuthMiddleware implements IMiddlewareProtocol{
  constructor () {}

  async route (httpRequest: IHttpRequest, httpResponse: IHttpResponse): Promise<boolean> {
    try{
      const tokenValidator = new TokenValidator()
      const token = httpRequest.headers.authorization
      if(token && tokenValidator.validate(token)){
        const validatorResponse = tokenValidator.validate(token)
        httpRequest.body.authorization = validatorResponse
        return true
      }
      httpResponse.statusCode = HttpResponse.unauthorizedError().statusCode
      httpResponse.body = HttpResponse.unauthorizedError().body
      return false
    }catch(err){
      console.log(err)
      throw HttpResponse.serverError()
    }
  }
}