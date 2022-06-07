import { MissingParamError } from "../../utils/errors"
import { IHttpResponse, HttpResponse } from "../http-response"
import { IHttpRequest } from "../http-request"
import { IReadBookByBookIdUseCase } from "../../domain/usecases/book"
import { IRouterProtocol } from "../protocols/router-protocol"


export default class ReadBookRouter implements IRouterProtocol{
  constructor (private readonly readBookByBookIdUseCase: IReadBookByBookIdUseCase){}

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
      const book = await this.readBookByBookIdUseCase.read(userId, bookId)
      if (!book) {
        return HttpResponse.forbiddenError()
      }
      return HttpResponse.ok(book)
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}