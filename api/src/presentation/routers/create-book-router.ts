import { InvalidParamError, MissingParamError } from "../../utils/errors"
import { IHttpResponse, HttpResponse } from "../http-response"
import { IHttpRequest } from "../http-request"
import { ICreateBookByUserIdUseCase } from "../../domain/usecases/book"
import { Book } from "../../domain/models"
import { IRouterProtocol } from "../protocols/router-protocol"


export default class CreateBookRouter implements IRouterProtocol{
  constructor (private readonly createBookByUserIdUseCase: ICreateBookByUserIdUseCase){}

  async route (httpRequest: IHttpRequest): Promise<IHttpResponse>{
    try {
      const userId = httpRequest.body.authorization.userId
      const { title, description, date } = httpRequest.body
      if (!userId) {
        return HttpResponse.serverError()
      }
      if (!title) {
        return HttpResponse.badRequest(new MissingParamError('title'))
      }
      if (!description) {
        return HttpResponse.badRequest(new MissingParamError('description'))
      }
      if (!date) {
        return HttpResponse.badRequest(new InvalidParamError('date'))
      }
      let book: Book | null = {
        userId,
        title,
        description,
        date
      }
      book = await this.createBookByUserIdUseCase.create(book)
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