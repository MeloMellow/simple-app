import ReadBooksByUserIdUseCase from "../../data/usecases/book/read-books-by-user-id-usecase"
import { ReadBooksByUserIdRepository } from "../../infra/repositories/read-books-by-user-id-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import ReadBooksRouter from "../../presentation/routers/read-books-router"

export default class ReadBooksRouterFactory {
  static make (): IRouterProtocol {
    const readBooksByUserIdRepository = new ReadBooksByUserIdRepository()
    const readBooksByUserIdUseCase = new ReadBooksByUserIdUseCase(readBooksByUserIdRepository)
    return new ReadBooksRouter(readBooksByUserIdUseCase)
  }
}