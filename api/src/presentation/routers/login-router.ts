import { InvalidParamError, MissingParamError } from "../../utils/errors"
import { IHttpResponse, HttpResponse } from "../http-response"
import { IAuthUserUseCase } from '../../domain/usecases/user/index'
import EmailValidator from "../../utils/email-validator"
import { IHttpRequest } from "../http-request"
import { IRouterProtocol } from "../protocols/router-protocol"


export default class LoginRouter implements IRouterProtocol{
  constructor (
    private readonly authUseCase: IAuthUserUseCase, 
    private readonly emailValidator: EmailValidator) 
  {}

  async route (httpRequest: IHttpRequest): Promise<IHttpResponse>{
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'))
      }
      if (!this.emailValidator.isValid(email)) {
        return HttpResponse.badRequest(new InvalidParamError('email'))
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError('password'))
      }
      const authUserUseCaseResponse = await this.authUseCase.auth(email, password)
      if (!authUserUseCaseResponse || !authUserUseCaseResponse.accessToken) {
        return HttpResponse.unauthorizedError()
      }
      return HttpResponse.ok({ 
        accessToken: authUserUseCaseResponse.accessToken, 
        name: authUserUseCaseResponse.user.name, 
        email: authUserUseCaseResponse.user.email 
      })
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}