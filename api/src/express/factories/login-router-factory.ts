import AuthUserUseCase from "../../data/usecases/user/auth-user-usecase"
import { LoadUserByEmailRepository } from "../../infra/repositories/load-user-by-email-repository"
import { IRouterProtocol } from "../../presentation/protocols/router-protocol"
import LoginRouter from "../../presentation/routers/login-router"
import EmailValidator from "../../utils/email-validator"
import Encrypter from "../../utils/encrypter"
import TokenGenerator from "../../utils/token-generator"

export default class LoginRouterFactory {
  static make (): IRouterProtocol {
    const tokenGenerator = new TokenGenerator()
    const encrypter = new Encrypter()
    const loadUserByEmailRepository = new LoadUserByEmailRepository()
    const emailValidator = new EmailValidator()
    const authUserUseCase = new AuthUserUseCase(
      loadUserByEmailRepository,
      encrypter,
      tokenGenerator
    )
    return new LoginRouter(
      authUserUseCase,
      emailValidator
    )
  }
}