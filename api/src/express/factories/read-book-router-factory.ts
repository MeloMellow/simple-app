import ReadBookByBookIdUseCase from "../../data/usecases/book/read-book-by-book-id-usecase";
import { ReadBookByBookIdRepository } from "../../infra/repositories/read-book-by-book-id-repository";
import { IRouterProtocol } from "../../presentation/protocols/router-protocol";
import ReadBookRouter from "../../presentation/routers/read-book-router";

export default class ReadBookRouterFactory {
  static make(): IRouterProtocol {
    const readBookByBookIdRepository = new ReadBookByBookIdRepository();
    const readBookByBookIdUseCase = new ReadBookByBookIdUseCase(
      readBookByBookIdRepository
    );
    return new ReadBookRouter(readBookByBookIdUseCase);
  }
}
