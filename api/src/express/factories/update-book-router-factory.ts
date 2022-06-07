import UpdateBookByBookIdUseCase from "../../data/usecases/book/update-book-by-book-id-usecase"
import { ReadBookByBookIdRepository } from "../../infra/repositories/read-book-by-book-id-repository"
import { UpdateBookByBookIdRepository } from "../../infra/repositories/update-book-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import UpdateBookRouter from "../../presentation/routers/update-book-router"

export default class UpdateBookRouterFactory {
  static make (): IRouterProtocol {
    const readBookByBookIdRepository = new ReadBookByBookIdRepository()
    const updateBookByBookIdRepository = new UpdateBookByBookIdRepository()
    const updateBookByBookIdUseCase = new UpdateBookByBookIdUseCase(
      readBookByBookIdRepository,
      updateBookByBookIdRepository
    )
    return new UpdateBookRouter(updateBookByBookIdUseCase)
  }
}