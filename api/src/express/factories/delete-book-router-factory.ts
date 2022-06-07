import DeleteBookByBookIdUseCase from "../../data/usecases/book/delete-book-by-book-id-usecase"
import { DeleteBookByBookIdRepository } from "../../infra/repositories/delete-book-by-book-id-repository"
import { ReadBookByBookIdRepository } from "../../infra/repositories/read-book-by-book-id-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import DeleteBookRouter from "../../presentation/routers/delete-book-router"

export default class DeleteBookRouterFactory {
  static make (): IRouterProtocol {
    const deleteBookByBookIdRepository = new DeleteBookByBookIdRepository()
    const readBookByBookIdRepository = new ReadBookByBookIdRepository()
    const deleteBookByBookIdUseCase = new DeleteBookByBookIdUseCase(
      deleteBookByBookIdRepository, 
      readBookByBookIdRepository
    )
    return new DeleteBookRouter(deleteBookByBookIdUseCase)
  }
}