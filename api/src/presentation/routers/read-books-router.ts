import { IHttpResponse, HttpResponse } from "../http-response"
import { IHttpRequest } from "../http-request"
import { IReadBooksByUserIdUseCase } from "../../domain/usecases/book"


export default class ReadBooksRouter {
  constructor (private readonly readBooksByUserIdUseCase: IReadBooksByUserIdUseCase){}

  async route (httpRequest: IHttpRequest): Promise<IHttpResponse>{
    try {
      const userId = httpRequest.body.authorization.userId
      if (!userId) {
        return HttpResponse.serverError()
      }
      const books = await this.readBooksByUserIdUseCase.read(userId)
      if (!books) {
        return HttpResponse.forbiddenError()
      }
      return HttpResponse.ok(books)
    } catch (error) {
      // console.log(error)
      return HttpResponse.serverError()
    }
  }
}