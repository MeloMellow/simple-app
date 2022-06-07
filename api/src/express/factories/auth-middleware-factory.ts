import { AuthMiddleware } from "../../presentation/middlewares/auth-middleware"
import { IMiddlewareProtocol } from "../../presentation/protocols/middleware-protocol"

export default class AuthMiddlewareFactory {
  static make (): IMiddlewareProtocol {
    return new AuthMiddleware()
  }
}