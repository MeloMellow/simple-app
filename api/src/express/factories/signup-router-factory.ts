import CreateUserUseCase from "../../data/usecases/user/create-user-usecase"
import { CreateUserRepository } from "../../infra/repositories/create-user-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import SignupRouter from "../../presentation/routers/signup-router"
import EmailValidator from "../../utils/email-validator"
import Encrypter from "../../utils/encrypter"

export default class SignupRouterFactory {
  static make (): IRouterProtocol {
    const encrypter = new Encrypter()
    const createUserRepository = new CreateUserRepository()
    const emailValidator = new EmailValidator()
    const createUserUseCase = new CreateUserUseCase(
      createUserRepository,
      encrypter
    )
    return new SignupRouter(
      createUserUseCase,
      emailValidator
    )
  }
}