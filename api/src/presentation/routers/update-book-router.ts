import { InvalidParamError, MissingParamError } from "../../utils/errors";
import { IHttpResponse, HttpResponse } from "../http-response";
import { IHttpRequest } from "../http-request";
import { IUpdateBookByBookIdUseCase } from "../../domain/usecases/book";
import { Book } from "../../domain/models";
import { IRouterProtocol } from "../protocols/router-protocol";

export default class UpdateBookRouter implements IRouterProtocol {
  constructor(
    private readonly updateBookByBookIdUseCase: IUpdateBookByBookIdUseCase
  ) {}

  async route(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const userId = httpRequest.body.authorization.userId;
      const bookId = httpRequest.params.id;
      const { title, description, date } = httpRequest.body;
      if (!userId) {
        return HttpResponse.serverError();
      }
      if (!bookId) {
        return HttpResponse.badRequest(new MissingParamError("bookId"));
      }
      if (!title) {
        return HttpResponse.badRequest(new MissingParamError("title"));
      }
      if (!description) {
        return HttpResponse.badRequest(new MissingParamError("description"));
      }
      if (!date) {
        return HttpResponse.badRequest(new InvalidParamError("date"));
      }
      let book: Book | null = {
        id: bookId,
        userId,
        title,
        description,
        date,
      };
      book = await this.updateBookByBookIdUseCase.update(userId, book);
      if (!book) {
        return HttpResponse.forbiddenError();
      }
      return HttpResponse.ok(book);
    } catch (error) {
      console.log(error);
      return HttpResponse.serverError();
    }
  }
}
