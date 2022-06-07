import CreateBookByUserIdUseCase from "../../data/usecases/book/create-book-by-user-id-usecase"
import { CreateBookRepository } from "../../infra/repositories/create-book-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import CreateBookRouter from "../../presentation/routers/create-book-router"

export default class CreateBookRouterFactory {
  static make (): IRouterProtocol {
    const createUserRepository = new CreateBookRepository()
    const createBookByUserIdUseCase = new CreateBookByUserIdUseCase(createUserRepository)
    return new CreateBookRouter(createBookByUserIdUseCase)
  }
}