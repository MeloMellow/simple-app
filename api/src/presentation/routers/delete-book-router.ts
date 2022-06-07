import { MissingParamError } from "../../utils/errors"
import { IHttpResponse, HttpResponse } from "../http-response"
import { IHttpRequest } from "../http-request"
import { IDeleteBookByBookIdUseCase } from "../../domain/usecases/book"
import { IRouterProtocol } from "../protocols/router-protocol"


export default class DeleteBookRouter implements IRouterProtocol{
  constructor (private readonly deleteBookByBookIdUseCase: IDeleteBookByBookIdUseCase){}

  async route (httpRequest: IHttpRequest): Promise<IHttpResponse>{
    try {
      const userId = httpRequest.body.authorization.userId
      const bookId = httpRequest.params.id
      if (!userId) {
        return HttpResponse.serverError()
      }
      if (!bookId) {
        return HttpResponse.badRequest(new MissingParamError('bookId'))
      }
      const response = await this.deleteBookByBookIdUseCase.delete(userId, bookId)
      if (!response) {
        return HttpResponse.forbiddenError()
      }
      return HttpResponse.ok({})
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}